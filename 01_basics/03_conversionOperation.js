// typeof can work in both ways
let myString = "abcd"
// console.log(typeof score) // output: string
// console.log(typeof(score)) // output: string



// datatypes can be converted between each other but there are limitations

// string to number
let score = "33abc"
let valueInNumber = Number(score)
// console.log(typeof valueInNumber) // output: number
// console.log(valueInNumber) // output: NaN  
// string to number: "33" => 33, "33abc" => NaN
// boolean to number: true => 1, false => 0
// null => 0



// number to boolean
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn) // output: true
// number to boolean: 1 => true, 0 => false
// string to boolean: "sampath" => true, "" => false



// boolean to string
let someNumber = true
let stringNumber = String(someNumber)
// console.log(stringNumber) // output: true
// console.log(typeof stringNumber) // output: string
// boolean to string: true => "true", false => "false"
// number to string: 33 => "33"
// null => "null"


// **************************Operations************************************


let value = 3
let negValue = -value
// console.log(negValue) // output: -3



// Arithmetic operators
// console.log(2+3);
// console.log(2-3);
// console.log(2*3);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);



// increment and decrement 
let gameCounter= 100
gameCounter++
// console.log(gameCounter);
gameCounter--
// console.log(gameCounter);



// strings concat together when added
let str1 = "hello"
let str2 = " sampath"
// console.log(str1+str2)



// intersting !!
// console.log("1" + 2) // output: "12"
// console.log(1 + "2") // output: "12"
// console.log("1" + 2 + 2) // output: "122"
// console.log(1 + 2 + "2") // output: "32"



// not good for code readability ex:

// console.log((3+4)*5%3)

// console.log(+true) // output: 1

// console.log(+"") // output: 0

// let num1, num2, num3
// num1 = num2 = num3 = 2+2





