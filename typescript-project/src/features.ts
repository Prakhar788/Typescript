export const saveLocal=(todos:TodoItemType[]):void=>{
localStorage.setItem("todos",JSON.stringify(todos));
}