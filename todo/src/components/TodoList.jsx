import React from 'react'
import TodoCard from './TodoCard'
export default function TodoList(props) {
    const {todos} = props;
    console.log(props)

  return (
    <ul className='main'>
        {todos.map((todo,index) => {
            return (
                <TodoCard key={index}>
                    <p>{todo}</p>
                </TodoCard>
            )
        })}
    </ul>
  )
}
