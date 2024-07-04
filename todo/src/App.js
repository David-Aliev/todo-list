import { useState,useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {

  const [todos,setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem('todos',JSON.stringify({todos: newList}))
  }


  function addTodosHandler(newTodo) {
    const newTodoList = [...todos,newTodo];
    persistData(newTodoList)
    setTodos(newTodoList)
  }


  function deleteTodoHandle(index) {
    const newTodoList = todos.filter((_,todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function editTodoHandle(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    deleteTodoHandle(index)
  }



  useEffect(() => {
    if(!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos');
    if(!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos)
  },[])

  return (
   <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} addTodosHandler={addTodosHandler}/>
      <TodoList editTodoHandle={editTodoHandle}  deleteTodoHandle={deleteTodoHandle} todos={todos} />
   </>
  );
}

export default App;
