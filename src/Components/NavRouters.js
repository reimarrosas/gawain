import React from "react";
import { NavLink } from "react-router-dom";

const NavRouters = ({ Routes }) => {
  return (
    <>
      <nav className="nav-routing">
        <ul className="nav-routing__links">
          <li>
            <NavLink className="nav-routing__link" exact activeClassName="active-route" to={Routes.all}>All</NavLink>
          </li>
          <li>
            <NavLink className="nav-routing__link" activeClassName="active-route" to={Routes.finished}>Finished</NavLink>
          </li>
          <li>
            <NavLink className="nav-routing__link" activeClassName="active-route" to={Routes.unfinished}>Unfinished</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavRouters;
