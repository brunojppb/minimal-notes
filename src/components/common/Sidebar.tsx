import React, {useEffect, createRef} from "react";
import styled from "styled-components";

const Nav = styled("nav")`
  width: 241px;
  
`;

export default function Sidebar() {

  return(
    <Nav className="bg-indigo-900 h-full flex-none px-4 py-4">
      <div className="flex flex-row">
        <h2 className="text-white text-bold">Minimal Notes</h2>
      </div>
      <ul className="my-4">
        <li className="border-l-4 border-indigo-500">
          <a className="text-white no-underline hover:bg-indigo-600 px-2 py-2 cursor-pointer block">
            <i className="cil-book mr-2"/> My Notebooks
          </a>
        </li>
      </ul>
    </Nav>
  );

}