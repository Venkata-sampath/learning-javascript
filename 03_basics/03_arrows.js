//"this" => used for getting the current context 

const user = {
    username: "sampath",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage()

// outside any block 'this' referes to the context of node
// console.log(this)// output: {} => node, output: window object => browser

// Not possible to use this keyword in functions like in object to call attributes
// Normal functions

function chai(){
    console.log(this)
}
// chai() // check the output yourself

function chai1(){
    let username = "sampath"
    console.log(this.username)
}
// chai1() // output: undefined

const chai2 = function(){
    let username = "sampath"
    console.log(this.username)
}
// chai2()// output: undefined


// Arrow functions

const chai3 = () =>{
    let username = "sampath"
    console.log(this)
}
chai3() // output: {}

const chai4 = () =>{
    let username = "sampath"
    console.log(this.username)
}
// chai4() // output: undefined

// const addTwo = (num1, num2)=>{
//     return num1+num2
// }

//Implicit arrow function 
// const addTwo = (num1,num2)=> num1+num2

// () => return not required
// {} => return required
// const addTwo = (num1,num2)=> (num1+num2)

// () => required to return object with arrow function
// const addTwo = (num1,num2)=> ({username: "sampath"})

// console.log(addTwo(3,4))