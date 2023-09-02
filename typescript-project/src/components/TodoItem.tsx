type PropsType={
todo:TodoItemType
}

const TodoItem = (props:PropsType) => {
  return (
    <div>TodoItem
        {props.todo.id}
    </div>
  )
}

export default TodoItem