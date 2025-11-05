function sayMyName(){
    console.log("s")
    console.log("a")
    console.log("m")
    console.log("p")
    console.log("a")
    console.log("t")
    console.log("h")
}

// sayMyName()

// function addNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result= addNumbers(3,4)
// console.log(result)

function loginUserMessage(username = "sam"){ // default value can be determined using = in parameters
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in` 
} 

// console.log(loginUserMessage("sampath"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){ // ... is rest operator which adds rest of the arguments into the parameters of the function
    return num1
}

// console.log(calculateCartPrice(200, 300, 500, 2000))

const user = {
    username: "sampath",
    price: 999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username: "sampath",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 100, 600]))