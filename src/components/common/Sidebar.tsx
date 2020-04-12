import React from "react";
import styled from "styled-components";
import {NavLink} from 'react-router-dom';
import Routes from "../../network/Routes";

const Nav = styled("nav")`
  width: 241px;
  li:not(:first-child) {
    margin-top: 0.5rem;
  }
`;

export default function Sidebar() {

  return(
    <Nav className="bg-gray-900 h-full flex-none px-4 py-4 absolute top-0 left-0 bottom-0">
      <div className="flex flex-row">
        <h2 className="text-white text-bold">Minimal Notes</h2>
      </div>
      <ul className="my-4">
        <SidebarLink to={Routes.NOTEBOOKS}>
          <i className="cil-book mr-2"/> My Notebooks
        </SidebarLink>
        <SidebarLink to={Routes.SETTINGS} exact={true}>
          <i className="cil-settings mr-2"/> Settings
        </SidebarLink>
        <SidebarLink to="/logout" exact={true} onClick={(e: Event) => {e.preventDefault(); console.log('TODO: Logout')}}>
          <i className="cil-exit-to-app mr-2"/> logout
        </SidebarLink>
      </ul>
    </Nav>
  );

}

function SidebarLink({children, ...props}: any) {
  return(
    <li>
      <NavLink className="text-sm text-white no-underline hover:bg-gray-700 px-2 py-2 cursor-pointer block rounded-sm transition duration-200 ease-in-out font-medium" activeClassName="border-l-4 border-indigo-400 bg-gray-700" {...props}>
        {children}
      </NavLink>
    </li>
  );
}