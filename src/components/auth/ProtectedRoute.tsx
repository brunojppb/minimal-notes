import React, { useContext } from 'react';
import {Route, Redirect} from 'react-router-dom';
import Routes from "../../network/Routes";
import { AuthContext } from './AuthWrapper';
import {GenericProps} from "./RegistrationRoute";


export default function ProtectedRoute({children, ...props}: GenericProps) {

  const {user} = useContext(AuthContext);
  console.log('user from context:', user ? 'yes' : 'no');
  return(
    <Route
      {...props}
      render={({location}) =>(
        user
          ? children
          : <Redirect to={{
            pathname: Routes.LOGIN,
            state: {from: location}
          }}/>
      )}
    />
  )

};