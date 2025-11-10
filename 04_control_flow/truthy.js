const userEmail = "sampath@gmail.com"

if(userEmail){
    console.log("Got user email")
}else{
    console.log("Dont have user email")
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


//truthy values

// "0", 'false', " ",  [], {}, function(){}


// to check if array is empty
let myArr = []
if(myArr.length === 0){
    console.log("Array is empty")
}

//to check if object is empty
let myObj = {}
// Object.keys() returns an array
if(Object.keys(myObj).length === 0){
    console.log("Object is empty")
}

// In browser : 
// false == 0 // output: true
// false == '' // output: true
// 0 == '' // output: true


// Nullish Coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // output: 5
// val1 = null ?? 10 // output: 10
// val1 = undefined ?? 15 // output: 15
// val1 = null ?? 10 ?? 20 // output: 10
// console.log(val1)

// Terinary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")

