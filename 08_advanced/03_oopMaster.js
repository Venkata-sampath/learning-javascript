// oop => object oriented programming consists of 4 main concepts 
// encapsulation, inheritance, polymorphism, abstraction

// in javascript everything is an object, even the class is an object

// example of an object:
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function(){
        return `${this.model} started in the year ${this.year}`
    }
}
// console.log(car.start())


// constructor function: (first letter capital)
function Person(name, age){
    this.name = name
    this.age = age
}

let john = new Person("john", 20)
// console.log(john.name)


// prototypal chain: we can access all the prototypes and add custom methods as well
function Animal(type){
    this.type = type
}

Animal.prototype.speak = function(){
    return `${this.type} makes a sound`
}

// lets see an example by adding a custom method in array
Array.prototype.sampath = function(){
    return `Custom method ${this}`
}

let myArray = [1,2,3]
// console.log(myArray.sampath())


// Classes
// functions inside a class are refered as methods, methods dont need function keyword
// every class has a constructor method and it is optional
class Vehicle{
    constructor(make, model){
        this.make = model
        this.model = model
    }

    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

// inheritance:
class Car extends Vehicle{
    drive(){
        return `${this.make} this is an inheritance example`
    }
}

let myCar = new Car("Toyota", "Corolla")
// console.log(myCar.start()) // inherited method
// console.log(myCar.drive()) // own method

let vehOne = new Vehicle("Toyota", "Corolla")
// console.log(vehOne.make)


// Encapsulation: used for hiding and containing the data
class BankAccount{
    #balance = 0;

    deposit(amount){
        this.#balance += amount;
        return this.#balance
    }

    getBalance(){
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount()
// console.log(account.getBalance()) // output: $ 0
// console.log(account.balance) // output: undefined


// Abstraction: abstracting unnecessary info while showing necessary info
class CoffeeMachine{
    start(){
        return `Starting the machine...`
    }

    brewCoffee(){
        return `Brewing Coffee`
    }

    pressStartButton(){
        let startMsg = this.start()
        let brewCoffeeMsg = this.brewCoffee(); 
        return `${startMsg}\n${brewCoffeeMsg}` 
    }
}

let myCoffee = new CoffeeMachine()
// console.log(myCoffee.start()) // output: Starting the machine...
// console.log(myCoffee.brewCoffee()) //output: Brewing Coffee

// We can abstract it further by making it into a sinle method
// console.log(myCoffee.pressStartButton()) // output: Starting the machine... Brewing Coffee


// Polymorphism: having more than one form
class Bird{
    fly(){
        return `Flying....`
    }
}

class Penguin{
    fly(){
        return `Penguins can't fly`
    }
}

let bird = new Bird()
let penguin = new Penguin()
// console.log(bird.fly()) // output: Flying....
// console.log(penguin.fly()) //output: Penguins can't fly


// static method: a method which is only accessible by class only
class Calculator{
    static add(a, b){
        return a+b
    }
}

// let miniCalc = new Calculator()
// console.log(miniCalc.add()) // output: Error

// only class can access static method
// console.log(Calculator.add(2,3)) // output: 5


// Getters and Setters: adds more control over protected attributes
// if you want the salary to be completely hidden use #
class Employee{
    constructor(name, salary){
        if(salary<0){
            throw new Error("Salary cannot be in negative value")
        }else{
            this.name = name
            this._salary = salary // _ is used before variables which will have getters and setters, its a developers practice
        }
    }

    get salary(){
        return this._salary
    }

    set salary(value){
        if(value<0){
            console.error("Invalid salary")
        }else{
            this._salary = value
        }
    }
}

let jack = new Employee("jack", 50000)
console.log(jack._salary) // output: 50000

// getters and setters dont need to have paranthesis ()
console.log(jack.salary) // output: 50000

// setters dont need to be written like a function instead follow the below way
jack.salary = -50000 // output: Invalid salary
