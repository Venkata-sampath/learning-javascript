//array

// js arrays can have different data types
const myArr = [0, 1, 2, 3, 4, 5]
const heros = ["spiderman", "superman", "shaktimaan", 1, true]

const myArr2 = new Array(1, 2, 3 ,4)
// console.log(myArr[0])

//Array methods

// myArr.push(6)//adds 6 at the end of the array
// myArr.pop()// removes the last element in the array

//myArr.unshift(9)// adds 9 at the start of the array
//myArr.shift()// removes the first elemet in the array

// console.log(myArr.includes(9))// returns true/false based on the element existance
//console.log(myArr.indexOf(5))// returns index of the given element, -1 if not present 

// const newArr = myArr.join()// converts array to string

// slice and splice

console.log("A ", myArr)

const myn1 = myArr.slice(1,3)// gives a copy of elements in the range 
console.log("slice ", myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1,3)// directly cuts the elements in range and alots it to new variable
console.log("splice ", myn2)
console.log("C ", myArr)