import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import {
  NavigationContainer,
  NavLinkContainer,
  NavLink,
  Logo
} from "./navigation.styles";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <Logo to="/">Isaac Okanigbe.</Logo>
        <NavLinkContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/user">User</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinkContainer>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
