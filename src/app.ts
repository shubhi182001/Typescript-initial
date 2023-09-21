//Class and Constructors in TypeScript:

class Persons{
    private name:string;
    age:number;
    protected hobbies:string[];

    constructor(name:string, age:number, hobbies:string[]){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    intro():string{
        return `Hii I am ${this.name} my age is ${this.age} and my hobbies are ${this.hobbies.join(" ,")}`;
    }
}

class Students extends Persons{
    grade: number;
    constructor(name:string, age:number, hobbies:string[], grade:number){
        super(name,age, hobbies);
        this.grade = grade
    }
    intro():string{
        // return `Hii I am ${this.name} I am in ${this.grade} grade `;  //name is private so we cant directly access it outside the class itself.
        return `${super.intro()} and the grade is ${this.grade}` 
    }

}

const persons1:Persons = new Persons("Shubhi", 21, ["hiieing", "byeing"]);
// console.log(persons1.hobbies);  cant be accessed outside the class or child class because protected .
console.log(persons1.intro()) // we can go for this and access hobbie through the intro function which is public inside the class.
const students1 :Students = new Students("shubhi", 41,["byy", "huuu"], 2);
console.log(students1.intro());


//Shorthand properties:
class Shubhi {
    constructor(public cute: boolean, public sweet: boolean, protected introvert:boolean ){}
    intro (){
        return `I am ${this.cute ? "cute": "not cute"} , ${this.sweet ? "sweet": "not sweet" } & ${this.introvert ? "introvert" :"not introvert"} `; 
    }
}

class Sanket extends Shubhi {
    constructor(cute:boolean, sweet:boolean, introvert:boolean, public grade: number ){
        super(cute, sweet, introvert);
    }
    intro(): string {
        return `${super.intro()} ,sanket is in the grade ${this.grade}` 
    }
}   
const sanket:Sanket = new Sanket(true,false, true,10);
console.log(sanket.intro());
const shubhi1:Shubhi = new Shubhi(true, false, true);
console.log(shubhi1.intro());

//GETTER OR SETTER:
// we use getter and setter to control the access & modification of class properties. 
//Getter methods allow you to retrieve the value of a property while setter allows you to set the value of a property with additional logic or validation.

class Persons1{
    private _age:number | undefined;
    constructor(private name:string,protected hobbies:string[]){
        
    }

    public set age(age: number){
        if (age> 150 || age<0){     // Age validation in constructor.
            throw new Error("Age is not valid");
        }else{
            this._age = age;
        }
    }

    public get age():number{
        if(this._age === undefined){
            throw new Error("Age is not defined");
        }else{
            return this._age;
        }
    }

    
    intro():string{
        return `Hii I am ${this.name} my age is ${this._age} and my hobbies are ${this.hobbies.join(" ,")}`;
    }
}


const persons2:Persons1 = new Persons1("Shubhi", ["hiieing", "byeing"]);
persons2.age = 52; // if I again do this , there is no logic for validation.
// console.log(persons1.hobbies);  cant be accessed outside the class or child class because protected .
console.log(persons2.intro())
console.log(persons2.age);


//Bank account practice:
class Bank{
    private _balance :number  = 0;
    public get balance(): number{
        return this._balance;
    }
    public set balance(newBalance:number){
        if(newBalance<0){
            throw new Error("Invalid Balance")
        }
        this._balance = newBalance;
    }
}

const account = new Bank();
account.balance = 10;
console.log(account.balance);   


class Temp{
    private _celsius:number = 0;
    public get celsius():number{
        return this._celsius;
    }
    public set celsius(newCelsius:number){
        this._celsius = newCelsius;
    } 
    public get fahrenheit():number{
        return (this._celsius * 9) /5 + 32;
    }

    public set fahrenheit(newFah:number){
        this._celsius = (newFah - 32)* 5/9;
    }
}

const temp = new Temp() ;
temp.celsius = 87;  //setter is called
console.log(temp.fahrenheit) //getter
temp.fahrenheit =90;    //setter
console.log(temp.celsius); //getter



//STATIC PROPERTIES & METHODS:
//In ts , static methods and properties belong to class itself rather than to instances of the class. By making methods & properties static we can access them directly without needing to create an instance of the class. This is useful for utility functions or properties that don't rely on instance-specific data.

class Maths{
    public static pi:number = Math.PI;
    public static add(num1: number, num2:number):number{
        return num1+num2;
    } 
    public static sub(num1: number, num2:number):number{
        return num1-num2;
    } 
}
console.log(Maths.pi);
console.log(Maths.add(5,2));
console.log(Maths.sub(3,1)); 

//Abstract Class:
//provides a way to define common properties and methods that multiple derived classes can share. Promotes code reuse & helps establish a common interface for related classes.
//they can't be instantiated -> because it is only used for taking and giving data.
//They focus on class inheritance and sharing common functionality.
//where as useContext hook in react focuses on managing global state & allowing components to consume the state.

abstract class Shape{
    constructor(protected color:string){}

    abstract calculateArea():number;
    abstract displayArea: () =>void;
    //or
     //abstact displayArea():void;

}

class Circle extends Shape{
    constructor(protected color:string, protected radius: number){
        super(color);
    }
    public calculateArea(): number {
        return Math.PI*this.radius*this.radius;
    }

    displayArea= () => {
        console.log(`This is a ${this.color} circle with radius ${this.radius}` );
    }
}

const circle = new Circle("red", 5);
console.log(circle.calculateArea());
circle.displayArea;

class Rectangle extends Shape{
constructor(protected color:string , protected length: number, protected breadth:number){
    super(color);
}
public  calculateArea(): number {
    return this.length*this.breadth;
}
displayArea=() =>{
    console.log(`This is a ${this.color} circle with length ${this.length} & ${this.breadth}` );
}
}
const rect  = new Rectangle("black", 5, 4);
console.log(rect.calculateArea());

//INTERFACE VS TYPE:
//Interface can extend other interfaces to inherit their members
//Use interface when defining object shapes or cl asses that adhere to a contract.
//Custom type can use unions & intersections for more complex type composition.
//Use custom type when you need unions intersections or mapped types.

//Ex:(type)
type Stud = {
    name:string;
    age:number;
}
type StudAddr = {
    city:string;
    state:string;
}

type Data = Stud & StudAddr;
const BioData: Data = {
    name:"shubhi",
    age:22,
    city:"ghaziabad",
    state:"UP"
}
console.log(BioData)


//Ex: (interface)
interface Stude{
    name:string;
    age:number;
}
interface StudeAddr{
    city:string;
    state:string;
}

interface DataS extends Stude , StudeAddr{}

const Bio:DataS={
    name:"shubhi",
    city:"ghaziabad",
    age:21,
    state:"UP"
}

//Same interface name treated as one:
interface StudeP{
    name:string;
    age:number;
}
interface StudeP{
    city:string;
    country:string;
}

interface Dataa extends StudeP{}

const Bioo:Dataa = {
    name:"shubhi",
    age:22,
    city:"tanda",
    country:"India"
}

// INTERFACES INTO CLASSES:
class Reference implements Dataa{
    constructor(public name:string, public age:number, public city:string, public country:string){}
}
const ref1 = new Reference("shubhi", 21, "pune", "UP");
console.log(ref1);