// if
// const temperature = 40
// if(temperature < 50){
//     console.log("temperature is less than 50")
// } else{
//     console.log("temperature is greater than 50")
// }
// console.log("will execute")


//comparision operators used in conditionals
// >, <, <=, >=, ==, !=, ===, !==


// const score = 200
// if(score>100){
//     let power = "fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`) // Error power not defined


const balance =1000
//implicit if
// if(balance > 500) console.log("test");


// not recommended
// if(balance > 500) console.log("test"),console.log("test 2");


//if else
// if(balance <500){
//     console.log("less than 500")
// } else if(balance <750){
//     console.log("less than 750")
// } else{
//     console.log("more than 750")
// }


let userLoggedIn = true
let debitCard = true
let loggedInFromGoogle = false
let loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}