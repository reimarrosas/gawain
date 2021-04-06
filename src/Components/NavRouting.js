import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavRouters from "./NavRouters";
import NavSwitches from "./NavSwitches";

const NavRouting = ({ todos, setTodos }) => {
  const Routes = {
    all: "/",
    finished: "/finished",
    unfinished: "/unfinished",
  };

  return (
    <>
      <Router>
        <NavRouters Routes={Routes} />
        <NavSwitches todos={todos} setTodos={setTodos} Routes={Routes} />
      </Router>
    </>
  );
};

export default NavRouting;
