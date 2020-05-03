import React, {ReactNode, createContext, useEffect, useCallback, useReducer} from 'react';
import Cookies from 'universal-cookie';
import Backend from '../../network/Backend';
import Loader from '../common/Loader';
import {User} from "../../models/user";

type State = {
  user?: User
  isLoading: boolean
  error?: string
}

type Action =
  | { type: 'request' }
  | { type: 'success', user: User }
  | { type: 'error', error: string }
  | { type: 'cleanup' };

interface AuthWrapperProps {
  children: ReactNode
}

interface AuthContextProps {
  user?: User
  onLogout: () => void
  onLogin: (token: string) => Promise<void>
  updateUser: (user: User) => void
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'request':
      return {isLoading: true}
    case 'success':
      return {isLoading: false, user: action.user}
    case 'error':
      return {isLoading: false, error: action.error}
    case 'cleanup':
      return {isLoading: false, user: undefined, error: undefined}
  }
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export default function AuthWrapper(props: AuthWrapperProps) {

  const [{
    user,
    isLoading
  }, dispatch] = useReducer(reducer, {isLoading: true}); // we always start this wrapper by loading the user profile

  const cleanUpAfterLogout = useCallback(() => {
    new Cookies().remove(Backend.AUTH_COOKIE_NAME, {path: '/'});
    dispatch({type: 'cleanup'})
  }, []);

  const fetchProfile = useCallback(() => {
    return Backend.getInstance().getProfile().then(user => {
      dispatch({type: 'success', user})
    }).catch(error => {
      dispatch({type: 'error', error: "could not fetch profile"})
      console.log('could not get user profile', error.response);
    });
  }, []);

  const onLogout = () => {
    Backend.getInstance().deleteLogout()
      .then(cleanUpAfterLogout)
      .catch(error => {
        dispatch({type: 'error', error: 'could not logout'});
        console.error("Could not logout", error.response.data);
      })
  };

  const onLogin = (token: string): Promise<void> => {
    const now = new Date();
    const oneYearFromNow = new Date(now.setFullYear(now.getFullYear() + 1));
    new Cookies().set(Backend.AUTH_COOKIE_NAME, token, {path: '/', expires: oneYearFromNow});
    return fetchProfile();
  };

  const updateUser = (user: User) => {
    dispatch({type: 'success', user})
  };

  useEffect(() => {
    // interceptor here after get profile success
    // So we can redirect user to login after 401 (Unauthorized)
    dispatch({type: 'request'});
    let deregisterInterceptor = () => {
    };
    fetchProfile().then(() => { // make sure to always register the interceptor
      deregisterInterceptor = Backend.getInstance().registerInterceptor(cleanUpAfterLogout, 401);
    });
    return deregisterInterceptor;
  }, [fetchProfile, cleanUpAfterLogout]);

  return isLoading
    ? <Loader/>
    : (
      <AuthContext.Provider value={{user, onLogout, onLogin, updateUser}}>
        {props.children}
      </AuthContext.Provider>
    )


}