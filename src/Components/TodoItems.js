import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const TodoItems = ({ todo }) => {
  return (
    <li className="todos__list-item">
      <span className="todos__todo-content">{todo.todoContent}</span>
      <AiOutlineDelete />
    </li>
  );
};

export default TodoItems;
