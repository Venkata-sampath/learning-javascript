const score =100
// console.log(score)

const balance = new Number(score)
// console.log(balance)

// console.log(balance.toString().length);// converts to string and use string methods
// console.log(balance.toFixed(2))// fixes decimal precision

const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))// adds comma in between numbers

// **********************************Math***********************************************

// console.log(Math)
// console.log(Math.abs(-4)) // absolute value
// console.log(Math.round(4.3))// nearest number roundoff
// console.log(Math.ceiling(4.3))// ceiling value
// console.log(Math.floor(4.3))// floor value
// console.log(Math.min(4,3,6,7))// min value
// console.log(Math.max(4,3,6,7))// max value

console.log(Math.random())// returns a value between 0 and 1
console.log((Math.random()*10)+1)   
console.log(Math.floor((Math.random()*10)+1))

const min =10
const max =20

console.log(Math.floor((Math.random()*(max-min+1)))+min)

