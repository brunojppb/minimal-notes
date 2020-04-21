import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Routes from "./network/Routes";
import MainContainer from "./components/common/MainContainer";
import AuthWrapper from "./components/auth/AuthWrapper";
import RegistrationRoute from "./components/auth/RegistrationRoute";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import LoginPage from "./components/auth/LoginPage";

function App() {
  return (
    <Router>
      <AuthWrapper>
        <Switch>
          <RegistrationRoute path={Routes.INDEX} exact={true}>
            <LoginPage/>
          </RegistrationRoute>
          <RegistrationRoute path={Routes.LOGIN} exact={true}>
            <LoginPage/>
          </RegistrationRoute>
          <ProtectedRoute path={Routes.APP} exact={false}>
            <MainContainer/>
          </ProtectedRoute>
          <Route>
            <h2>Not found</h2>
          </Route>
        </Switch>
      </AuthWrapper>
    </Router>
  );
}

export default App;
