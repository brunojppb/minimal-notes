import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Routes from "./network/Routes";
import MainContainer from "./components/common/MainContainer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={Routes.INDEX} exact>
          <div>Home</div>
        </Route>
        <Route path={Routes.APP}>
          <MainContainer/>
        </Route>
        <Route>
          <h2>Not found</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
