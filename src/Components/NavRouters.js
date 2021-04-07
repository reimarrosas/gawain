import React from "react";
import { NavLink } from "react-router-dom";

const NavRouters = ({ Routes }) => {
  return (
    <>
      <nav className="nav-routing">
        <ul className="nav-routing__links">
          <li className="nav-routing__link">
            <NavLink activeClassName="active-route" to={Routes.all}>All</NavLink>
          </li>
          <li className="nav-routing__link">
            <NavLink activeClassName="active-route" to={Routes.finished}>Finished</NavLink>
          </li>
          <li className="nav-routing__link">
            <NavLink activeClassName="active-route" to={Routes.unfinished}>Unfinished</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavRouters;
