import { useState } from "react"
import TodoItem from "./components/TodoItem"

const App = () => {
  const [todos,setTodos]=useState<TodoItemType[]>([
{
  title:"Asdsd",
  isCompleted:false,
  id:"rgrgf"
},
{
  title:"Asdsd",
  isCompleted:false,
  id:"rgrgf"
}

  ]);
   const [title,setTitle]=useState<TodoItemType["title"]>("");
 const submithandle=():void=>{

 }

  const complete=(id:TodoItemType["id"]):void=>{};
  const deleteH=(id:TodoItemType["id"]):void=>{};
  return (
    <div>
      
      {todos.map((i)=>
      <TodoItem complete={complete} deleteH={deleteH} key={i.id} todo={i}/>
      )}
      <form onSubmit={submithandle}>
      <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="new task"></input>
      <button type="submit">ADD</button>
      </form>
    </div>
  )
}

export default App