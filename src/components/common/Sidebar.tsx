import React, {useContext} from "react";
import styled from "styled-components";
import {NavLink} from 'react-router-dom';
import Routes from "../../network/Routes";
import whiteLogo from '../../assets/img/logo-light.svg';
import {AuthContext} from "../auth/AuthWrapper";

const Nav = styled("nav")`
  width: 241px;
  .logo {
    width: 150px;
  }
  li:not(:first-child) {
    margin-top: 0.5rem;
  }
`;

export default function Sidebar() {

  const {onLogout} = useContext(AuthContext);
  const handleLogout = (e: Event) => {
    e.preventDefault();
    onLogout();
  }

  return(
    <Nav className="bg-gray-900 h-full flex-none px-4 py-4">
      <div className="flex flex-row justify-center">
        <img src={whiteLogo} alt="minimal notes" className="logo"/>
      </div>
      <ul className="my-4">
        <SidebarLink to={Routes.NOTEBOOKS}>
          <i className="cil-book mr-2"/> My Notebooks
        </SidebarLink>
        <SidebarLink to={Routes.SETTINGS} exact={true}>
          <i className="cil-settings mr-2"/> Settings
        </SidebarLink>
        <SidebarLink to="/logout" exact={true} onClick={handleLogout}>
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