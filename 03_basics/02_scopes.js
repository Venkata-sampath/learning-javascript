//var dosent follow block scope 
//let and constant follow block scope

let a =300
if(true){
    let a=10
    const b=20
    console.log("Inner a: ", a)
}

//console.log(a)
//console.log(b)
//console.log(c)