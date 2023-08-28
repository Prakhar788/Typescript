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


const

const renderTodo=(todos:Todo[])=>{
todos.forEach((item)=>{
  generate();
})
}