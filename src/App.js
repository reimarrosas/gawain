import React, { useState } from "react";

import CreateTodoForm from "./Components/CreateTodoForm";
import NavRouting from "./Components/NavRouting";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <CreateTodoForm todos={todos} setTodos={setTodos} />
      <NavRouting todos={todos} />
      {console.log(todos)}{" "}
      {console.log(todos.filter((todo) => todo.todoCompleted))}
      {console.log(todos.filter((todo) => !todo.todoCompleted))}
    </div>
  );
}

export default App;
