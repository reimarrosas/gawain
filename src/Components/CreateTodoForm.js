import React, { useState } from "react";
import { CgAddR } from "react-icons/cg";
import { nanoid } from "nanoid";

const CreateTodo = ({ todos, setTodos }) => {
  const [inputVal, setInputVal] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (validateInput(inputVal)) {
      setTodos(appendInput(todos, {
        todoContent: inputVal,
        todoId: nanoid(8),
        todoCompleted: false,
      }))
    }
    setInputVal("");
  };

  const validateInput = (input) => /[^\s*]/g.test(input);

  const appendInput = (baseList, input) => [...baseList, input];

  const handleInputs = (event) => {
    setInputVal(event.target.value);
  };

  return (
    <form className="create-todo" onSubmit={handleFormSubmit}>
      <input
        onChange={handleInputs}
        className="create-todo__input"
        value={inputVal}
        type="text"
        id="input-todo"
        aria-label="Input Todos"
        autoComplete="off"
      />
      <button className="btn btn--create" type="submit">
        <CgAddR className="create-todo__icon" />
      </button>
    </form>
  );
};

export default CreateTodo;
