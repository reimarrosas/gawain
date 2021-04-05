import React, { useState } from "react";
import { CgAddR } from "react-icons/cg";
import { nanoid } from "nanoid";

const CreateTodo = (props) => {
  const [inputVal, setInputVal] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.setTodos(
      props.todos.concat([
        {
          todoContent: inputVal,
          todoId: nanoid(8),
          todoCompleted: false,
        },
      ])
    );
    setInputVal("");
  };

  const handleInputs = (event) => {
    setInputVal(event.target.value);
  };

  return (
    <form className="create-todo" onSubmit={handleFormSubmit}>
      <input
        onChange={handleInputs}
        value={inputVal}
        type="text"
        id="input-todo"
        aria-label="Input Todos"
      />
      <button className="btn btn-create" type="submit">
        <CgAddR />
      </button>
    </form>
  );
};

export default CreateTodo;
