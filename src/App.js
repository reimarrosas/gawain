import React, { useState } from "react";

import CreateTodoForm from "./Components/CreateTodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <CreateTodoForm todos={todos} setTodos={setTodos} />
      {console.log(todos)}
    </div>
  );
}

export default App;
