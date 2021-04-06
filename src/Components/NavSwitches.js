import React from "react";
import { Switch, Route } from "react-router-dom";
import TodoSections from "./TodoSections";

const NavSwitches = ({ todos, setTodos, Routes }) => {
  return (
    <>
      <Switch>
        <Route exact path={Routes.all}>
          <TodoSections setTodos={setTodos} todos={todos} section="all" />
        </Route>
        <Route path={Routes.finished}>
          <TodoSections setTodos={setTodos} todos={todos} section="finished" />
        </Route>
        <Route path={Routes.unfinished}>
          <TodoSections setTodos={setTodos} todos={todos} section="unfinished" />
        </Route>
      </Switch>
    </>
  );
};

export default NavSwitches;
