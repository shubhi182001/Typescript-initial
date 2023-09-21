"use strict";
var num = 10;
var str = "shubhi kedia";
let comp = Math.sqrt(16);
console.log(comp);
console.log(num.toString());
let nanVal = NaN;
console.log(nanVal);
let first = "shubhi";
let second = "kedia";
console.log(first + second);
let maxi = Number.MAX_SAFE_INTEGER;
console.log(maxi);
let num2;
num2 = "shubhi";
num2 = 5;
num2 = true;
async function fetch() {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    return data;
}
const person = {
    name: "shubhi",
    age: 20,
    isStudent: true,
    add: {
        city: "tanda",
        country: "India"
    }
};
const person2 = {
    name: "sanket",
    age: 18,
    isStudent: true,
    add: {
        city: "tanda",
        country: "india"
    }
};
console.log(person.add.city);
console.log(person2.age);
const student1 = {
    name: "shubhii",
    age: 21,
    greet: (country) => `Welcome I am from India , my name is ${student1.name} and my age is ${student1.age}` //call signature function in TS
};
const student2 = {
    name: "sanket",
    age: 21,
    greet: (country) => `Hii ${student2.name} ${student2.age}`
};
const intro = (student1) => {
    const { name, age } = student1;
    return `Welcome my name is ${name} & my age is ${age}`;
};
console.log(intro(student1));
console.log(student1.greet('India'));
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    email: "kediashubhi@gmail.com",
    password: "shubhi",
    role: Roles.admin
};
const user2 = {
    email: "kedia@gmail.com",
    password: "huv",
    role: Roles.user
};
const isAdmin = (user1) => {
    const { email, role } = user1;
    return (role === "admin") ? `${email} is an admin` : `${email} is not an admin`;
};
console.log(isAdmin(user2));
const insaan1 = ["shubhi", 21, true];
const insaan2 = ["sanket", 18, false];
const displayInsaan = (insaan1) => {
    const [name, age, hasLicense] = insaan1;
    console.log(`Name:${name}, Age:${age}, hasLicense:${hasLicense ? "Yes" : "No"}`);
};
displayInsaan(insaan1);
displayInsaan(insaan2);
//Union operator:
const userInput = (value) => {
    if (typeof value === "number") {
        return value * 2;
    }
    else if (typeof value === "string") {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
    else {
        throw new Error("Not suitable input");
    }
};
console.log(userInput("shubhi"));
console.log(userInput(20));
const employeeU = {
    name: "shubhi",
    emp_id: 981289,
    age: 21
};
const employee = {
    emp_id: 2178,
    department: "CS",
    name: "shubhi",
    age: 21
};
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
function add(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
const r1 = add(5, 10);
const r2 = add("hello", "world");
function add3(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
add3(9, "shubhi");
add3(3, 4);
const product1 = {
    name: "shubhi",
    price: 300,
    quantity: 1
};
const product2 = {
    name: "sanket",
    price: 100,
    quantity: 2
};
const calcnumber = (product1) => {
    const { price, quantity } = product1;
    return price * quantity;
};
console.log(calcnumber(product1));
console.log(calcnumber(product2));
