import React from 'react';
import Sidebar from "./Sidebar";
import {Switch, Route} from "react-router-dom";
import Routes from "../../network/Routes";
import NotebookListPage from "../notebook/NotebookListPage";
import SettingsPage from "../settings/SettingsPage";

export default function MainContainer() {

  return (
    <main className="h-screen w-full flex flex-row">
      <Sidebar/>
      <Switch>
        <Route path={Routes.SETTINGS} exact>
          <SettingsPage/>
        </Route>
        <Route path={Routes.NOTEBOOKS}>
          <NotebookListPage/>
        </Route>
      </Switch>
    </main>
  );

}