import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const TodoItems = ({ todo, todos, setTodos }) => {
  const handleDelete = (updatedTodo, todoList) => {
    console.log(todoList);
    return todoList.filter(todoToEdit => !Object.is(updatedTodo, todoToEdit));
  }

  const handleComplete = (updatedTodo, todoList) => {
    return todoList.map(todoToEdit => {
      if (Object.is(todoToEdit, updatedTodo)) {
        todoToEdit.todoCompleted = !todoToEdit.todoCompleted;
      }
      return todo;
    })
  }

  const handleDelegate = (e) => {
    let updatedTodos;
    console.log(todos);
    if (e.target.tagName === "svg") {
      updatedTodos = handleDelete(todo, todos);
    } else {
      updatedTodos = handleComplete(todo, todos);
    }
    
    setTodos(updatedTodos);
  }
  
  return (
    <li onClick={handleDelegate} className="todos__list-item">
      <span className={`todos__todo-content${todo.todoComplete ? " todo-complete" : ""}`}>{todo.todoContent}</span>
      <AiOutlineDelete onClick={handleDelete} />
    </li>
  );
};

export default TodoItems;
