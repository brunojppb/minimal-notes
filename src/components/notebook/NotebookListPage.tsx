import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Routes from "../../network/Routes";

const NotebookListPageWrapper = styled('div')`
  
`;

export default function NotebookListPage() {

  return(
    <NotebookListPageWrapper className="flex flex-col py-4 px-4">
      <h2 className="font-bold">My Notebooks</h2>
      <div className="w-full mt-4">
        <button className="p-2 border rounded hover:bg-gray-100 text-sm font-semibold">
          <i className="cil-plus mr-2"/>
          New notebook
        </button>
      </div>
      <table className="table-fixed my-4 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="w-1/2 p-2">Name</th>
            <th className="w-1/4 p-2"># Entries</th>
            <th className="w-1/4 p-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">
              <Link to={Routes.notebookRoute("1")}>
                Motocycle Adventures
              </Link>
            </td>
            <td className="p-2">21</td>
            <td className="p-2">21.03.2020</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="p-2">Elixir compiler and fundamentals</td>
            <td className="p-2">12</td>
            <td className="p-2">21.03.2020</td>
          </tr>
          <tr>
            <td className="p-2">Exploring Scala concurrency</td>
            <td className="p-2">43</td>
            <td className="p-2">21.03.2020</td>
          </tr>
        </tbody>
      </table>
    </NotebookListPageWrapper>
  );

}