//Primitive

//7 types: number, string, boolean, null, undefined, symbol, bigint

//js is a dynamically typed language, no need to explicitly define the variable type unlike java, C, C++ etc

const score = 100
const scorevalue =100.3 //in js both int and decimal/float are numbers

const isLoggedIn = true
const outsideTemp = null
let userEmail; // or let userEmail = undefined 

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId) // false as a Symbol gives unique id for each variable

const bigInteger = 394235346322325n //to explicitly store a bigInt use "n" at the end


//Reference (Non Primitive)
//Array, object, function

//All the reference types are considered as objects and function as function object

const heros = ["spiderman", "superman", "shaktimaan"]// Array

let myObj = {
    name : "sampath",
    age: 21
}// Object

const myFunction = function(){
    console.log("Hello world")
}// function


console.log(typeof myFunction)
//typeof() method is used for getting the datatype of a variable
//number => number
//string => string
//boolean => boolean
//null => object
//undefined => undefined
//symbol => symbol
//bigint => bigint 

//array => object
//object => object
//function => function
