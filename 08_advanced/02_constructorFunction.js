// constructor function is similar to a class, multiple instances/objects of this function can be created 

// "this" keyword is used to differentiate the objects and their attributes

// Example of constructor function: 
function Person(name, age){
    this.name = name
    this.age = age
}

function Car(make, model){
    this.make = make
    this.model = model
}

// Objects of the constructor functions should use "new" keyword
let myCar = new Car("Toyota", "Camry");
// console.log(myCar) // output: Car { make: 'toyota', model: 'Camry' }

let myNewCar = Car("Tata", "Safari")
// console.log(myNewCar) // output: undefined

// "new" and "this" have an internal link to work in a constructor function. new creates a new instance of the constructor and "this" refers to the particular instance of the constructor.

function Tea(type){
    this.type = type
    this.describe = function(){
        return `this is a cup of ${this.type}`
    }
}

let lemonTea = new Tea("lemonTea")
// console.log(lemonTea.describe());


//Another way to create attributes or functions in a constructor function: 
function Animal(species){
    this.species = species
}

// prototype is used for creatinf new functions or attributes
Animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}

let Dog = new Animal("Dog")
// console.log(Dog.sound())


// throw errors when "new" keyword is not used in constructor function
function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new Keyword")
    }
    this.name = name
}

let tea = new Drink("tea");
let coffee = Drink("Coffee")