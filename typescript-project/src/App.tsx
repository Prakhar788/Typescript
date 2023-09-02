import { useState } from "react"
import TodoItem from "./components/TodoItem"

const App = () => {
  const [todos,setTodos]=useState<TodoItemType[]>([
    {title:"Asdsd",
  isCompleted:false,
id:"rgrgf"},
{title:"Asdsd",
  isCompleted:false,
id:"rgrgf"}

  ]);
  return (
    <div>
      
      {todos.map((i)=>
      <TodoItem key={i.id} todo={i}/>
      )}
      <input type="text" placeholder="new task"></input>
      <button>ADD</button>
    </div>
  )
}

export default App