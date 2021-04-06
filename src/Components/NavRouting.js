import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavRouters from "./NavRouters";
import NavSwitches from "./NavSwitches";

const NavRouting = ({ todos }) => {
  const Routes = {
    all: "/",
    finished: "/finished",
    unfinished: "/unfinished",
  };

  return (
    <>
      <Router>
        <NavRouters Routes={Routes} />
        <NavSwitches todos={todos} Routes={Routes} />
      </Router>
    </>
  );
};

export default NavRouting;
