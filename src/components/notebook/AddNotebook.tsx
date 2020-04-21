import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Routes from "../../network/Routes";

const AddNotebookWrapper = styled("div")`
  transition: opacity 0.25s ease;
`;

export default function AddNotebook() {

  return (
    <AddNotebookWrapper
      className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"/>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

        <div className="modal-content py-4 text-left px-6">

          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">New Notebook</p>
          </div>


          <form className="">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Notebook name
              </label>
              <input
                autoFocus={true}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text" name="name" placeholder="Give this notebook a nice name" required={true}/>
            </div>

            <div className="flex justify-end pt-2">
              <Link to={Routes.NOTEBOOKS}
                className="px-4 bg-transparent p-3 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-800 mr-2">Cancel
              </Link>
              <button className="py-3 px-4 bg-gray-700 rounded-md text-white hover:bg-gray-600" type="submit">
                Save
              </button>
            </div>
          </form>

        </div>
      </div>

    </AddNotebookWrapper>
);

}