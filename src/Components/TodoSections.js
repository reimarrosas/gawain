import React from "react";
import TodoItems from "./TodoItems";
import { CgRedo } from "react-icons/cg";

const AllTodos = ({ todos, setTodos }) => {
  return (
    <ul key="all-todos" className="todos all-todos">
      {todos.map((todo) => {
        return <TodoItems key={todo.todoId} todo={todo} todos={todos} setTodos={setTodos} />;
      })}
    </ul>
  );
};

const FinishedTodos = ({ todos, setTodos }) => {
  return (
    <ul key="finished-todos" className="todos finished-todos">
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
    <ul key="unfinished-todos" className="todos unfinished-todos">
      {todos
        .filter((todo) => !todo.todoCompleted)
        .map((todo) => {
          return <TodoItems key={todo.todoId} todo={todo} todos={todos} setTodos={setTodos} />;
        })}
    </ul>
  );
};

const TodoSections = ({ todos, setTodos, section }) => {
  const handleClear = () => {
    setTodos([]);
  }
  
  return (
    <main>
      {section === "all" ? (
        <AllTodos setTodos={setTodos} todos={todos} />
      ) : section === "finished" ? (
        <FinishedTodos setTodos={setTodos} todos={todos} />
      ) : (
        <UnfinishedTodos setTodos={setTodos} todos={todos} />
      )}
      {
        todos.length !== 0 &&
        <button onClick={handleClear} className="btn btn--clear">
          <span>Clear</span> <CgRedo />
        </button>
      }
    </main>
  );
};

export default TodoSections;
