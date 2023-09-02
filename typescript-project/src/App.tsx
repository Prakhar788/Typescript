import { useState } from "react"
import TodoItem from "./components/TodoItem"

const App = () => {
  const [todos,setTodos]=useState<TodoItemType[]>([]);
  return (
    <div>
      {todos.map((i)=>
      <TodoItem key={i.id} todo={i}/>
      )}
    </div>
  )
}

export default App