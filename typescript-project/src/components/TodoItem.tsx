type PropsType={
todo:TodoItemType,
complete:(id:TodoItemType["id"])=>void,
deleteH:(id:TodoItemType["id"])=>void,
}

const TodoItem = ({todo,complete,deleteH}:PropsType) => {
  return (
    <div>
      <div>{todo.title}</div> 
       <button onClick={()=>complete(todo.id)}>Edit</button>
       <button onClick={()=>deleteH(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItem