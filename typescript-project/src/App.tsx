import { useState } from "react"
import TodoItem from "./components/TodoItem"

const App = () => {
  const [todos,setTodos]=useState<TodoItemType[]>([]);
   const [title,setTitle]=useState<TodoItemType["title"]>("");
 const submitHandle=(event: React.FormEvent<HTMLFormElement>):void=>{
 event.preventDefault();
 const newTodo:TodoItemType={
  title,
  isCompleted:false,
  id:String(Math.random()*1000)
 }
 setTodos((prev)=>([...prev,newTodo]));
 setTitle("");

 }

  const complete=(id:TodoItemType["id"]):void=>{};
  const deleteH=(id:TodoItemType["id"]):void=>{};
  return (
    <div>
      
      {todos.map((i)=>
      <TodoItem complete={complete} deleteH={deleteH} key={i.id} todo={i}/>
      )}
      <form onSubmit={submitHandle}>
      <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="new task"></input>
      <button type="submit">ADD</button>
      </form>
    </div>
  )
}

export default App