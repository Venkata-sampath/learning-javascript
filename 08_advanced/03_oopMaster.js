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
console.log(vehOne.make)