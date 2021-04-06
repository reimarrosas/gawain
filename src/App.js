import React, { useState } from "react";

import CreateTodoForm from "./Components/CreateTodoForm";
import NavRouting from "./Components/NavRouting";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <CreateTodoForm todos={todos} setTodos={setTodos} />
      <NavRouting todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
