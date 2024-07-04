

export default function TodoInput(props) {
  const { addTodosHandler,todoValue,setTodoValue } = props;
 
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
        Add
      </button>
    </header>
  );
}
