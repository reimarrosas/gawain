import React from "react";
import TodoItems from "./TodoItems";

const AllTodos = ({ todos, setTodos }) => {
  return (
    <ul key="all-todos" className="all-todos">
      {todos.map((todo) => {
        return <TodoItems key={todo.todoId} todo={todo} todos={todos} setTodos={setTodos} />;
      })}
    </ul>
  );
};

const FinishedTodos = ({ todos, setTodos }) => {
  return (
    <ul key="finished-todos" className="finished-todos">
      {todos
        .filter((todo) => todo.todoCompleted)
        .map((todo) => {
          return <TodoItems key={todo.todoId} todo={todo} todos={todos} setTodos={setTodos} />;
        })}
    </ul>
  );
};

const UnfinishedTodos = ({ todos, setTodos }) => {
  return (
    <ul key="unfinished-todos" className="unfinished-todos">
      {todos
        .filter((todo) => !todo.todoCompleted)
        .map((todo) => {
          return <TodoItems key={todo.todoId} todo={todo} todos={todos} setTodos={setTodos} />;
        })}
    </ul>
  );
};

const TodoSections = ({ todos, setTodos, section }) => {
  return (
    <main className="todos">
      {section === "all" ? (
        <AllTodos setTodos={setTodos} todos={todos} />
      ) : section === "finished" ? (
        <FinishedTodos setTodos={setTodos} todos={todos} />
      ) : (
        <UnfinishedTodos setTodos={setTodos} todos={todos} />
      )}
    </main>
  );
};

export default TodoSections;
