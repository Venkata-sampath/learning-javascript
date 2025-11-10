//var dosent follow block scope 
//let and constant follow block scope

let a =300
if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner a: ", a) // output: 10
}

//console.log(a) // output: 300 
//console.log(b) // Error b not defined
//console.log(c) // output: 30

function one(){
    const username = "sampath"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website) //  Error website not defined

    two()
}

// one()

if(true){
    const username = "sampath"
    if(username == "sampath"){
        const website = "youtube"
        // console.log(username + website)
    }
    // console.log(website) // Error website not defined
}

// console.log(username) // Error username not defined

// *************************************interesting*************************************

console.log(addOne(4))

function addOne(num){
    return num+1
}

// hoisting concept intro
console.log(addTwo(4)) // Error cannot access addTwo before intialization

const addTwo = function(num){
    return num+2
}

