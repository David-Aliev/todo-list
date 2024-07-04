import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {

  const [todos,setTodos] = useState([])

  function addTodosHandler(newTodo) {
    const newTodoList = [...todos,newTodo];
    setTodos(newTodoList)
  }

  return (
   <>
      <TodoInput  addTodosHandler={addTodosHandler}/>
      <TodoList todos={todos} />
      <h2>test</h2>
   </>
  );
}

export default App;
