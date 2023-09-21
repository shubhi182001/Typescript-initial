var num: number = 10
var str:string = "shubhi kedia"

let comp: number = Math.sqrt(16);

console.log(comp);
console.log(num.toString());


let nanVal:number = NaN;
console.log(nanVal);
 
let first = "shubhi";
let second = "kedia";
console.log(first+second);   

let maxi = (Number as any).MAX_SAFE_INTEGER;
console.log(maxi);

let num2:unknown ;
num2 = "shubhi";
num2 = 5;
num2 = true;

async function fetch(): Promise<unknown> {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    return data;
}

type Person = {
    name: string;
    age:number;
    isStudent:boolean;
    add:{city:string; country:string}
}

const person :Person = {
    name:"shubhi",
    age:20,
    isStudent:true,
    add:{
        city:"tanda",
        country:"India"
    }
}
const person2:Person= {
    name:"sanket",
    age:18,
    isStudent:true,
    add:{
        city:"tanda",
        country:"india"
    }
}
console.log(person.add.city);
console.log(person2.age);

type Student = {
    name:string;
    age:21;
    greet:(country:string) => string
}

const student1 : Student ={
    name:"shubhii",
    age:21,
    greet:(country):string => `Welcome I am from India , my name is ${student1.name} and my age is ${student1.age}`  //call signature function in TS
}

const student2:Student = {
    name:"sanket",
    age:21,
    greet:(country):string => `Hii ${student2.name} ${student2.age}`
}

const intro :(student1:Student) =>string = (student1:Student):string => {
    const {name, age} = student1;
    return `Welcome my name is ${name} & my age is ${age}`;
}

console.log( intro(student1));
console.log(student1.greet('India'));

enum Roles {
    user="user",
    admin= "admin"
}

type LoginDetails = {
    name?: string;
    email:string;
    password: string;
    role: Roles
}

const user1:LoginDetails ={
    email:"kediashubhi@gmail.com",
    password:"shubhi",
    role:Roles.admin
}

const user2:LoginDetails={
    email:"kedia@gmail.com",
    password:"huv",
    role:Roles.user
}

const isAdmin:(user1:LoginDetails)=>string = (user1:LoginDetails):string => {
    const {email, role } = user1;
    return (role === "admin")? `${email} is an admin`:`${email } is not an admin`
}

console.log(isAdmin(user2));

 
type PersonInfo = readonly [string, number, boolean]; // we make it read only because we use tuples so that later we can't change anything .Therefore readonly is necessary here so we cant push or pop anything from the array

const insaan1:PersonInfo = ["shubhi", 21, true];
const insaan2:PersonInfo = ["sanket", 18, false];


const displayInsaan:(insaan1:PersonInfo) => void = (insaan1:PersonInfo):void => {
    const[name, age, hasLicense] = insaan1;
    console.log(`Name:${name}, Age:${age}, hasLicense:${hasLicense?"Yes" :"No"}`);
}

displayInsaan(insaan1);
displayInsaan(insaan2);


//Union operator:

const userInput: (value: string | number)=>string|number = (value: string|number):string|number => {
    if(typeof value === "number"){ 
        return value*2;
    }else if( typeof value === "string"){
        return value.charAt(0).toUpperCase()+value.slice(1);
    }else{
        throw new Error("Not suitable input");
    }
}

console.log(userInput("shubhi"));
console.log(userInput(20));
// userInput(true);  It throws error



//INTERSECTION:
type Employee = {
    emp_id:number;
    department: string
}

type People = {
    name: string;
    age: number;
}

type EmployeeDetails = Employee & People;
type EmployeeUnion = Employee | People;

const employeeU : EmployeeUnion = {  // we have to include at least 1 type
    name:"shubhi",
    emp_id:981289,
    age:21
}

const employee:EmployeeDetails = {   // we have to include both the type
    emp_id:2178,
    department:"CS",
    name:"shubhi",
    age:21
}


//we have to shorted function overloading with generic function:

//so from this :
// function add1(a:number, b:number):number{
//     return a+b;
// }
// function add2(a:string, b:string):string{
//     return a+b;
// }
// function add3(a:any , b:any):any{
//     return a+b;
// }

//to this:
function add<T>(a:T, b:T){
    console.log(typeof a);
    console.log(typeof b);
}
 
const r1 = add(5,10);
const r2 = add("hello", "world");


function add3<T,U>(a:T, b:U):any{
    console.log(typeof a);
    console.log(typeof b);
}

add3(9, "shubhi");
add3(3,4);


//INTERFACE IN TS

interface Products{
    name:string;
    price:number;
    quantity:number;
}

const product1:Products={
    name:"shubhi",
    price:300,
    quantity:1
}
const product2:Products={
    name:"sanket",
    price:100,
    quantity:2
}

const calcnumber = (product1:Products):number => {
    const{price, quantity} = product1;
    return price*quantity;
}
console.log(calcnumber(product1));
console.log(calcnumber(product2));


