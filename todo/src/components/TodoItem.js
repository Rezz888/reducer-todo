import React, { useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";

const TodoItem = props => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const { todo } = props;
  console.log(todo);
  const handleCLick = e => {
    e.stopPropagation();
    dispatch({
      type: "TOGGLE_TODO",
      payload: todo
    });
  };
  return (
    <li onClick={e => handleCLick(e)} key={todo.id}>
      {todo.item}
    </li>
  );
};

export default TodoItem;