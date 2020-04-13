import React from 'react';
import Sidebar from "./Sidebar";
import {Switch, Route} from "react-router-dom";
import Routes from "../../network/Routes";
import SettingsPage from "../settings/SettingsPage";
import NotebookContainer from "../notebook/NotebookContainer";

export default function MainContainer() {

  return (
    <main className="h-screen w-full flex flex-row relative">
      <Sidebar/>
      <div className="w-full" style={{marginLeft: 241}}>
        <Switch>
          <Route path={Routes.SETTINGS} exact>
            <SettingsPage/>
          </Route>
          <Route path={Routes.NOTEBOOKS}>
            <NotebookContainer/>
          </Route>
          <Route>
            <NotebookContainer/>
          </Route>
        </Switch>
      </div>
    </main>
  );

}