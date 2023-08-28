import './style.css'

interface Todo{
  title:string,
  isCompleted:boolean,
  readonly id:string
}

const todos:Todo[] = [];


const todosContainer=document.querySelector(".todoContainer") as HTMLDivElement;

const todoInput=document.getElementsByName("title")[0] as HTMLInputElement;

const myForm=document.getElementById("myForm") as HTMLFormElement;


myForm.onsubmit=(e:SubmitEvent)=>{
e.preventDefault();
const todo:Todo={
  title:todoInput.value,
  isCompleted:false,
  id:String(Math.random()*100),
}
todos.push(todo);
todoInput.value="";
renderTodo(todos);
}


const generate=(title:string,isCompleted:boolean,id:string)=>{
 const todo:HTMLDivElement=document.createElement("div");
 todo.className="todo";
 const checkBox:HTMLInputElement=document.createElement("input")
 checkBox.setAttribute("type","checkbox");
 checkBox.className="isCompleted";
 checkBox.checked=isCompleted;


const para:HTMLParagraphElement=document.createElement("p");
para.innerText=title;

const btn:HTMLButtonElement=document.createElement("button");
btn.innerText="Delete";
btn.className="deleteBtn"
btn.onclick=()=>{
  deleteTodo(id);
  renderTodo(todos);
};

const deleteTodo=(id:string)=>{
const indx=todos.findIndex((item)=>item.id===id);
todos.splice(indx,1);
}

todo.append(checkBox,para,btn);
todosContainer.append(todo);
}

const renderTodo=(todos:Todo[])=>{
  todosContainer.innerText="";
todos.forEach((item)=>{
  generate(item.title,item.isCompleted,item.id);
})
}