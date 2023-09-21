"use strict";
//Class and Constructors in TypeScript:
class Persons {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    intro() {
        return `Hii I am ${this.name} my age is ${this.age} and my hobbies are ${this.hobbies.join(" ,")}`;
    }
}
class Students extends Persons {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    intro() {
        // return `Hii I am ${this.name} I am in ${this.grade} grade `;  //name is private so we cant directly access it outside the class itself.
        return `${super.intro()} and the grade is ${this.grade}`;
    }
}
const persons1 = new Persons("Shubhi", 21, ["hiieing", "byeing"]);
// console.log(persons1.hobbies);  cant be accessed outside the class or child class because protected .
console.log(persons1.intro()); // we can go for this and access hobbie through the intro function which is public inside the class.
const students1 = new Students("shubhi", 41, ["byy", "huuu"], 2);
console.log(students1.intro());
//Shorthand properties:
class Shubhi {
    cute;
    sweet;
    introvert;
    constructor(cute, sweet, introvert) {
        this.cute = cute;
        this.sweet = sweet;
        this.introvert = introvert;
    }
    intro() {
        return `I am ${this.cute ? "cute" : "not cute"} , ${this.sweet ? "sweet" : "not sweet"} & ${this.introvert ? "introvert" : "not introvert"} `;
    }
}
class Sanket extends Shubhi {
    grade;
    constructor(cute, sweet, introvert, grade) {
        super(cute, sweet, introvert);
        this.grade = grade;
    }
    intro() {
        return `${super.intro()} ,sanket is in the grade ${this.grade}`;
    }
}
const sanket = new Sanket(true, false, true, 10);
console.log(sanket.intro());
const shubhi1 = new Shubhi(true, false, true);
console.log(shubhi1.intro());
//GETTER OR SETTER:
// we use getter and setter to control the access & modification of class properties. 
//Getter methods allow you to retrieve the value of a property while setter allows you to set the value of a property with additional logic or validation.
class Persons1 {
    name;
    hobbies;
    _age;
    constructor(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    set age(age) {
        if (age > 150 || age < 0) { // Age validation in constructor.
            throw new Error("Age is not valid");
        }
        else {
            this._age = age;
        }
    }
    get age() {
        if (this._age === undefined) {
            throw new Error("Age is not defined");
        }
        else {
            return this._age;
        }
    }
    intro() {
        return `Hii I am ${this.name} my age is ${this._age} and my hobbies are ${this.hobbies.join(" ,")}`;
    }
}
const persons2 = new Persons1("Shubhi", ["hiieing", "byeing"]);
persons2.age = 52; // if I again do this , there is no logic for validation.
// console.log(persons1.hobbies);  cant be accessed outside the class or child class because protected .
console.log(persons2.intro());
console.log(persons2.age);
//Bank account practice:
class Bank {
    _balance = 0;
    get balance() {
        return this._balance;
    }
    set balance(newBalance) {
        if (newBalance < 0) {
            throw new Error("Invalid Balance");
        }
        this._balance = newBalance;
    }
}
const account = new Bank();
account.balance = 10;
console.log(account.balance);
class Temp {
    _celsius = 0;
    get celsius() {
        return this._celsius;
    }
    set celsius(newCelsius) {
        this._celsius = newCelsius;
    }
    get fahrenheit() {
        return (this._celsius * 9) / 5 + 32;
    }
    set fahrenheit(newFah) {
        this._celsius = (newFah - 32) * 5 / 9;
    }
}
const temp = new Temp();
temp.celsius = 87; //setter is called
console.log(temp.fahrenheit); //getter
temp.fahrenheit = 90; //setter
console.log(temp.celsius); //getter
//STATIC PROPERTIES & METHODS:
//In ts , static methods and properties belong to class itself rather than to instances of the class. By making methods & properties static we can access them directly without needing to create an instance of the class. This is useful for utility functions or properties that don't rely on instance-specific data.
class Maths {
    static pi = Math.PI;
    static add(num1, num2) {
        return num1 + num2;
    }
    static sub(num1, num2) {
        return num1 - num2;
    }
}
console.log(Maths.pi);
console.log(Maths.add(5, 2));
console.log(Maths.sub(3, 1));
//Abstract Class:
//provides a way to define common properties and methods that multiple derived classes can share. Promotes code reuse & helps establish a common interface for related classes.
//they can't be instantiated -> because it is only used for taking and giving data.
//They focus on class inheritance and sharing common functionality.
//where as useContext hook in react focuses on managing global state & allowing components to consume the state.
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    color;
    radius;
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    displayArea = () => {
        console.log(`This is a ${this.color} circle with radius ${this.radius}`);
    };
}
const circle = new Circle("red", 5);
console.log(circle.calculateArea());
circle.displayArea;
class Rectangle extends Shape {
    color;
    length;
    breadth;
    constructor(color, length, breadth) {
        super(color);
        this.color = color;
        this.length = length;
        this.breadth = breadth;
    }
    calculateArea() {
        return this.length * this.breadth;
    }
    displayArea = () => {
        console.log(`This is a ${this.color} circle with length ${this.length} & ${this.breadth}`);
    };
}
const rect = new Rectangle("black", 5, 4);
console.log(rect.calculateArea());
const BioData = {
    name: "shubhi",
    age: 22,
    city: "ghaziabad",
    state: "UP"
};
console.log(BioData);
const Bio = {
    name: "shubhi",
    city: "ghaziabad",
    age: 21,
    state: "UP"
};
const Bioo = {
    name: "shubhi",
    age: 22,
    city: "tanda",
    country: "India"
};
// INTERFACES INTO CLASSES:
class Reference {
    name;
    age;
    city;
    country;
    constructor(name, age, city, country) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.country = country;
    }
}
const ref1 = new Reference("shubhi", 21, "pune", "UP");
console.log(ref1);
