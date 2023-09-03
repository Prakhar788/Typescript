import { useState } from "react"

type PropsType={
todo:TodoItemType,
// complete:(id:TodoItemType["id"])=>void,
deleteH:(id:TodoItemType["id"])=>void,
}

const TodoItem = ({todo,deleteH}:PropsType) => {
  const [edit,setEdit]=useState<boolean>(false);
  const [text,setText]=useState<string>(todo.title);
  return (
    <div>
      {edit?<input value={text} onChange={(e)=>setText(e.target.value)} type="string"/> :<div>{todo.title}</div> }
      
       <button onClick={()=>setEdit((prev)=>!prev)}>Edit</button>
       <button onClick={()=>deleteH(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItem