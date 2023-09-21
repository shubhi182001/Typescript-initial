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