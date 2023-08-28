//// TYPESCRIPT AUTOMATICALLY ASSIGNS A TYPE WHEN YOU DEFINE A VARIABLE
let variable = "hello";

variable = "hi";

let age = 18;

// age="eighteen"

//// EXPLICITLY PROVIDING A TYPE
let ageWithType: number = 22;

// ageWithType ="eighteen"
ageWithType = 18;

//// BASIC TYPES
let testString: string;

testString = "hello";

let testBoolean: boolean;

testBoolean = false;

//// MULTIPLE TYPES (UNION TYPES)
let testStringOrNumber: string | number;

testStringOrNumber = 10;
testStringOrNumber = "10";
// testStringOrNumber = []

//// ARRAYS
let names = ["john", "jane", "tom"];

// names.push(3)
names.push("mike");

let numbers = [11, 22, 35];

// numbers.push(true)
numbers.push(92);

let testStringArray: string[];

// testStringArray = [1,2,3]
testStringArray = ["one", "two", "three"];

let testNumberArray: number[];

// testNumberArray = [true, "hi", 23]
testNumberArray = [12, 55, 23];

let testStringOrNumberArray: (string | number)[];

testStringOrNumberArray = [1, "two", 3];


const arr:number[]=[];
const arr9:Array<number>=[];

//// OBJECTS
let user = {
  username: "john",
  age: 22,
  isAdmin: false,
};

user.username = "jane";
// user.age = "eighteen"
user.age = 29;
// user.isAdmin = "no"
user.isAdmin = true;

// user.phone = "+12345678"

let userObj: {
  username: string;
  age: number;
  isAdmin: boolean;
};

userObj = {
  username: "john",
  age: 23,
  isAdmin: true,
  // phone:"+1234567"
};

let userObj2: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

userObj2 = {
  username: "jane",
  age: 43,
  isAdmin: false,
  phone: "+1234567",
};

//// ANY TYPES ( BE CAREFUL )
let testAny: any;

testAny = 12;
testAny = "Hello";
testAny = true;
testAny = [true];
testAny = {};
let testAnyArray: any[];
testAnyArray = [1, "two", false, []];


// FUNCTIONS
let sayHi = () => {
    console.log("Hi, welcome");
  };
  
  // sayHi = "hi"
  
  let funcReturnString = (): string => {
    console.log("hi");
    return "Prakhar";
  };
  
  let multiple = (num: number) => {
    return num * 2;
  };
  let multiple2 = (num: number): number => {
    return num * 2;
  };
  let multiple3 = (num: number): void => {
    // return num * 2;
    //Do anything but don't return any
  };
  
  let sum = (num1: number, num2: number, another?: number) => {
    return num1 + num2;
  };
  
  sum(2, 3);
  
  let func = (user: { username: string; age: number; phone?: string }) => {
    console.log(user.username);
  };
  
  // TYPE ALIASES
  type UserType = {
    username: string;
    age: number;
    phone?: string;
  };
  
  let betterFunc = (user: UserType) => {
    console.log(user.username);
  };
  
  //FUNCTION SIGNATURES
  type myFunc = (a: number, b: string) => void;
  
  let write: myFunc = (num, str) => {
    console.log(num + " times " + str);
  };
  
  type UserType2 = {
    username: string;
    age: number;
    phone?: string;
    theme: "dark" | "light";
  };
  
  const userWithTheme: UserType2 = {
    username: "john",
    age: 43,
    // theme:"pink"
    theme: "dark",
  };
  
//// INTERFACES
// Be aware no equal sign
interface IUser {
    username: string;
    email: string;
    age: number;
  }
  
  interface IEmployee extends IUser {
    employeeId: number;
  }
  
  const emp: IEmployee = {
    username: "tom",
    email: "tom@gmail.com",
    age: 43,
    employeeId: 1,
  };
  
  const client: IUser = {
    username: "tom",
    email: "tom@gmail.com",
    age: 43,
  };
  
  //// GENERICS
  interface IAuthor {
    id: number;
    username: string;
  }
  
  interface ICategory {
    id: number;
    title: string;
  }
  
  interface IPost {
    id: number;
    title: string;
    desc: string;
    extra: IAuthor[] | ICategory[];
  }
  
  interface IPostBetter<T> {
    id: number;
    title: string;
    desc: string;
    extra: T[];
  }
  const testMe: IPostBetter<string> = {
    id: 1,
    title: "post title",
    desc: "post desc",
    extra: ["str", "str2"],
  };
  interface IPostEvenBetter<T extends object> {
    id: number;
    title: string;
    desc: string;
    extra: T[];
  }
  const testMe2: IPostEvenBetter<{ id:number }> = {
    id: 1,
    title: "post title",
    desc: "post desc",
    extra: [{ id: 1 }],
  };
  const testMe3: IPostEvenBetter<IAuthor> = {
    id: 1,
    title: "post title",
    desc: "post desc",
    extra: [{ id: 1, username: "john" }],
  };
  const testMe4: IPostEvenBetter<ICategory> = {
    id: 1,
    title: "post title",
    desc: "post desc",
    extra: [{ id: 1, title: "cat" }],
  };


  //type assertion
  // const btn=document.getElementById("btn") as HTMLElement;
  //btn?.onclick
  // const btn=<HTMLElement>document.getElementById("btn");
  // btn.onclick;
  const btn=document.getElementById("btn")!;
  btn.onclick;


  // const img=document.getElementById("img");
  // img.src 
  const img=document.getElementById("img") as HTMLImageElement;
  img.src 


  // interface Person{
  //   name:string,
  //   email:string
  // }

  // const myObj:Person={
  //   name:"prakhar",
  //   email:"abc.com"
  // }

  // const getName=():string=>{
  //   return myObj.name;
  // }
  // const getEmail=():string=>{
  //   return myObj.email;
  // }
  interface Person{
    [key:string]:string
  }

  const myObj:Person={
    name:"prakhar",
    email:"abc.com"
  }

  const getName=():String=>{
    return myObj["name"];
  }
  const getEmail=():String=>{
    return myObj["email"];
  }
  // const getData=(key:string):string=>{
  //   return myObj[key];
  // }

  // const getData=(key:"name" | "email"):string=>{
  //   return myObj[key];
  // } //if there are many keys then use keyof.
  
  const getData=(key: keyof Person):string=>{
    return myObj[key];
  }

  // ------------------------------------------
//   Type Utility

//   Partial<Type>

//   type Person1={
// name:string,
// email:string
//   }

  

//   // type Person2={
//   //   name?:string,
//   //   email?:string
//   //     }
//   type Person2=Partial<Person1>
  
// Required<type>--opp of partial.

// type Person1={
// name?:string,
// email?:string
// }
// type Person2=Required<Person1>
// const user2:Required<Person1>={
// name:"Prakhar",
// email:"abc.com"
// }

 
// ReadOnly<Type>
// type user2={
//    readonly name:"Prakhar"
// }
// const user3:Readonly<user2>={
//   name:"Prakhar"
// }

//Pick<type,key>
// interface OrderInfo{
//   readonly id:string,
//   name:string,
//   address:string,
//   state:string,
//   country:string,
// }

// type Shipping=Pick<OrderInfo,"address"|"name">

//Omit<type,keys>--opp. of pick
// interface OrderInfo{
//   readonly id:string,
//   name:string,
//   address:string,
//   state:string,
//   country:string,
// }

// type Shipping=Omit<OrderInfo,"address"|"name">

//Exclude<type,exclude union>
// type Random=Exclude<string|number,number>

// type MyUnion=string|number|boolean
// type Random=Exclude<MyUnion,number>


//Extract<type,union>
// type Random=Extract<string|number,number>

//Non-nullable<type>
// type MyUnion=string|number|boolean|null|undefined
// type Random=NonNullable<MyUnion>
// type Random2=Exclude<MyUnion,null|undefined>


//Parameter<Type>
// const myfunc=(a:number,b:number)=>{
//  console.log(a+b);
// }

// type random3=Parameters<typeof myfunc>

//ConstructerParameter<Type>
// class sample{
//   constructor(public s:string,public number:number){

//   }
// }

// type random3=ConstructorParameters<typeof sample>

//Returntype<type>
// const myfunc2=():string=>{
//   return "prakhar";
// }
// type func3=ReturnType<typeof myfunc2>


//Generics
// const func7=<T>(n:T):T=>{
//   return n;
// }

// const ans=func7("df");
// const ans2=func7(67);

// type Person4={
//   name:string,
//   age:number
// }

// const obj3:Person4={
//   name:"P",
//   age:45
// }
// const ans6=func7<Person4>(obj3);

 //generic example-->
 
 type person={
  name:string,
  age:number
 }
 

 const array3:Array<person>=[{
  name:"Prakhar",
  age:45
 },{
  name:"Prakhar",
  age:45
 },{
  name:"Prakhar",
  age:45
 },{
  name:"Prakhar",
  age:45
 },]
 

 const filter=<T,Key extends keyof T>(arr:T[],property:Key,value:T[Key]):T[]=>{
return arr.filter(item=>item[property]===value)
 }

 const filtered=filter(array3,"name","Prakhar");