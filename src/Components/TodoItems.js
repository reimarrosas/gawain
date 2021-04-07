import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const TodoItems = ({ todo, todos, setTodos }) => {
  const handleDelete = (updatedTodo, todoList) => {
    return todoList.filter(todoToEdit => !Object.is(updatedTodo, todoToEdit));
  }

  const handleComplete = (updatedTodo, todoList) => {
    return todoList.map(todoToEdit => {
      if (Object.is(todoToEdit, updatedTodo)) {
        todoToEdit.todoCompleted = !todoToEdit.todoCompleted;
      }
      return todoToEdit;
    })
  }

  const handleDelegate = (e) => {
    let updatedTodos;
    if (e.target.tagName === "svg") {
      updatedTodos = handleDelete(todo, todos);
    } else {
      updatedTodos = handleComplete(todo, todos);
    }
    
    setTodos(updatedTodos);
  }
  
  return (
    <li onClick={handleDelegate} className="todos__list-item">
      <span className={`todos__todo-content${todo.todoCompleted ? " todo-completed" : ""}`}>{todo.todoContent}</span>
      <AiOutlineDelete />
    </li>
  );
};

export default TodoItems;
