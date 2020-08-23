import React, { useState, useReducer } from "react";
import { todoReducer } from "../reducers/todoReducer";

const TodoList = props => {
  return (
    <ul>
      {props.todos.map(todo => (
        <li key={todo.id}>{todo.item}</li>
      ))}
    </ul>
  );
};

export default TodoList;