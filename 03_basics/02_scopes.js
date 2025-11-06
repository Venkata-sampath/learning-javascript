//var dosent follow block scope 
//let and constant follow block scope

let a =300
if(true){
    let a=10
    const b=20
    // console.log("Inner a: ", a)
}

//console.log(a)
//console.log(b)
//console.log(c)

function one(){
    const username = "sampath"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}

// one()

if(true){
    const username = "sampath"
    if(username == "sampath"){
        const website = "youtube"
        // console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)

// *************************************interesting*************************************

console.log(addOne(4))

function addOne(num){
    return num+1
}

console.log(addTwo(4))// hoisting concept intro

const addTwo = function(num){
    return num+2
}

