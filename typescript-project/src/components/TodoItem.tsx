type PropsType={
todo:TodoItemType
}

const TodoItem = ({todo}:PropsType) => {
  return (
    <div>
      <div>{todo.title}</div> 
       <button>Edit</button>
       <button>Delete</button>
    </div>
  )
}

export default TodoItem