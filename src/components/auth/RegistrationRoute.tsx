import React, {ReactNode, useContext} from 'react';
import { AuthContext } from './AuthWrapper';
import { Route, Redirect } from 'react-router';
import Routes from "../../network/Routes";

export interface GenericProps {
  children: ReactNode,
  path: string
  exact: boolean
}

export default function RegistrationRoute({children, ...props}: GenericProps) {

  const {user} = useContext(AuthContext);

  return(
    <Route {...props} render={({location}) => (
      user
        ? <Redirect to={{
          pathname: Routes.NOTEBOOKS,
          state: {from: location}
        }}/>
        : children
    )}/>
  );

}