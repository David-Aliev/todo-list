import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {

  const [todos,setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function addTodosHandler(newTodo) {
    const newTodoList = [...todos,newTodo];
    setTodos(newTodoList)
  }


  function deleteTodoHandle(index) {
    const newTodoList = todos.filter((_,todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)
  }

  function editTodoHandle(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    deleteTodoHandle(index)
  }

  return (
   <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} addTodosHandler={addTodosHandler}/>
      <TodoList editTodoHandle={editTodoHandle}  deleteTodoHandle={deleteTodoHandle} todos={todos} />
   </>
  );
}

export default App;
