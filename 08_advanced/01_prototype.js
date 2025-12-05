// javascript is a prototype based language its not an object based language.
// a class is a blueprint and an object is the implementation of the class
// objects can have relations between each other and have seperate attributes as well

// javascript has objects, classes and other oop functionality but under the hood it still is a prototype based language and is manipulated with prototypes to make it like oop language

// every single data type has prototypes and can be accessible directly via browsers


// example 1:
let computer = {cpu: 12}
let lenovo = {
    screen: "HD",
    __proto__: computer // its way to inherit all prototypes of another datatype 
}
console.log(`computer`, computer) // output: computer { cpu: 12 }

// __ is known as dunder and __proto__ gives access to prototype in js, nodejs tends to avoid giving default prototypes, to access them look in the browser(inspect)
console.log(`computer`, computer.__proto__) // output: computer [Object: null prototype] {}


// we can explicitlity mention to take prototypes of other datatypes and attah to toher datatypes 
console.log(`lenovo `, lenovo.__proto__)// output: lenovo  { cpu: 12 }


//example 2:
let genericCar = {tyres: 4}
let tesla = {
    driver: "AI"
}

// another way to inherit all the protoypes of other datatypes
Object.setPrototypeOf(tesla, genericCar)

// when we use Object.setPrototypeOf() method, to access the explicit prototypes assigned to a datatype we need to use Object.getPrototypeOf() method
console.log(`tesla`, tesla) // output: tesla { driver: 'AI' }

// although the inherited attributes can be accessed in the below way
console.log(`tesla`, tesla.tyres)// output: tesla 4

// but this is another way to get the entire values
console.log(`tesla`, Object.getPrototypeOf(tesla))// output: tesla { tyres: 4 }