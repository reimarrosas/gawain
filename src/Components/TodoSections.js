import React from "react";
import TodoItems from "./TodoItems";

const AllTodos = ({ todos }) => {
  return (
    <ul key="all-todos" className="all-todos">
      {todos.map((todo) => {
        return <TodoItems key={todo.todoId} todo={todo} />;
      })}
    </ul>
  );
};

const FinishedTodos = ({ todos }) => {
  return (
    <ul key="finished-todos" className="finished-todos">
      {todos
        .filter((todo) => todo.todoCompleted)
        .map((todo) => {
          return <TodoItems key={todo.todoId} todo={todo} />;
        })}
    </ul>
  );
};

const UnfinishedTodos = ({ todos }) => {
  return (
    <ul key="unfinished-todos" className="unfinished-todos">
      {todos
        .filter((todo) => !todo.todoCompleted)
        .map((todo) => {
          return <TodoItems key={todo.todoId} todo={todo} />;
        })}
    </ul>
  );
};

const TodoSections = ({ todos, section }) => {
  return (
    <main className="todos">
      {section === "all" ? (
        <AllTodos todos={todos} />
      ) : section === "finished" ? (
        <FinishedTodos todos={todos} />
      ) : (
        <UnfinishedTodos todos={todos} />
      )}
    </main>
  );
};

export default TodoSections;
