import React from "react";
import { Link } from "react-router-dom";

const NavRouters = ({ Routes }) => {
  return (
    <>
      <nav className="nav-routing">
        <ul className="nav-routing__links">
          <li className="nav-routing__link">
            <Link to={Routes.all}>All</Link>
          </li>
          <li className="nav-routing__link">
            <Link to={Routes.finished}>Finished</Link>
          </li>
          <li className="nav-routing__link">
            <Link to={Routes.unfinished}>Unfinished</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavRouters;
