import React from 'react';
import {Switch, Route} from "react-router-dom";
import Routes from "../../network/Routes";
import NotebookListPage from "./NotebookListPage";
import NotebookDetailPage from "./NotebookDetailPage";

export default function NotebookContainer() {

  return(
    <Switch>
      <Route path={Routes.NOTEBOOK}>
        <NotebookDetailPage/>
      </Route>
      <Route>
        <NotebookListPage/>
      </Route>
    </Switch>
  )

}