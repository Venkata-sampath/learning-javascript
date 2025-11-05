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
console.log(loginUserMessage())