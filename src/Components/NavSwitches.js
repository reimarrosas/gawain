import React from "react";
import { Switch, Route } from "react-router-dom";
import TodoSections from "./TodoSections";

const NavSwitches = ({ todos, Routes }) => {
  return (
    <>
      <Switch>
        <Route path={Routes.all}>
          <TodoSections todos={todos} section="all" />
        </Route>
        <Route path={Routes.finished}>
          <TodoSections todos={todos} section="finished" />
        </Route>
        <Route path={Routes.unfinished}>
          <TodoSections todos={todos} section="unfinished" />
        </Route>
      </Switch>
    </>
  );
};

export default NavSwitches;
