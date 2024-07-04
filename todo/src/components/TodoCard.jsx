import React from "react";

export default function TodoCard(props) {
  const { children, deleteTodoHandle, index, editTodoHandle } = props;
  // console.log(deleteTodoHandle)

  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            editTodoHandle(index);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            deleteTodoHandle(index);
          }}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
