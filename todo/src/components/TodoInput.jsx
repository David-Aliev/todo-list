import { useState } from "react";

export default function TodoInput(props) {
  const { addTodosHandler } = props;
  const [todoValue, setTodoValue] = useState("");
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="enter todo..."
      ></input>
      <button
        onClick={() => {
          addTodosHandler(todoValue);
          setTodoValue("");
        }}
      >
        add
      </button>
    </header>
  );
}
