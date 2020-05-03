import React, {useEffect, useReducer} from "react";
import {Link, Route, Switch} from "react-router-dom";
import dayjs from 'dayjs';
import Routes from "../../network/Routes";
import AddNotebook from "./AddNotebook";
import {Notebook} from "../../models/notebook";
import Backend from "../../network/Backend";

type CurrentState = "request" | "success" | "error";
type State = {
  notebooks: Notebook[]
  state: CurrentState
}

type Action =
  | { type: 'request' }
  | { type: 'success', notebooks: Notebook[] }
  | { type: 'error', error: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'request':
      return {...state, state: "request"}
    case 'success':
      return {notebooks: action.notebooks, state: "success"}
    case 'error':
      return {...state, state: "error"}
  }
}

export default function NotebookListPage() {

  const [{notebooks, state}, dispatch] = useReducer(reducer, {notebooks: [], state: "request"});

  useEffect(() => {
    Backend.getInstance().getNotebooks().then(notebooks => {
      dispatch({type: 'success', notebooks});
    }).catch(error => {
      dispatch({type: "error", error: "could not load notebooks"});
    });
  }, [dispatch])

  return(
    <div className="flex flex-col py-4 px-4">
      <h2 className="font-bold">My Notebooks</h2>
      <div className="w-full mt-4">
        <Link to={Routes.ADD_NOTEBOOK} className="py-3 px-4 bg-gray-700 inline-block rounded-md text-white hover:bg-gray-600">
          New notebook
        </Link>
      </div>
      <table className="table-fixed my-4 text-left w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="w-1/2 p-2">Name</th>
            <th className="w-1/4 p-2"># Entries</th>
            <th className="w-1/4 p-2">Created At</th>
          </tr>
        </thead>
        <tbody>
        { notebooks.map(notebook => {
          return(
            <tr key={notebook.id}>
              <td className="p-2">
                <Link to={Routes.notebookRoute(notebook.id)} className="underline">
                  {notebook.name}
                </Link>
              </td>
              <td className="p-2">{notebook.totalEntries}</td>
              <td className="p-2">{dayjs(notebook.createdAt).format('DD.MM.YYYY')}</td>
            </tr>
          )
          })
        }
        </tbody>
      </table>
      <Switch>
        <Route path={Routes.ADD_NOTEBOOK} component={AddNotebook}/>
      </Switch>
    </div>
  );

}