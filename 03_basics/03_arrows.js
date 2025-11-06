//"this" => used for getting the current context 

const user = {
    username: "sampath",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welocome to website`);
        console.log(this)
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage()

// outside any block this referes to the context of node
// console.log(this)// output: {} => node output: window object => browser

function chaiOne(){
    let username = "sampath"
    console.log(this.username)
}
// chaiOne()// output: undefined

const chaiTwo = function(){
    let username = "sampath"
    console.log(this.username)
}
// chaiTwo()// output: undefined

//Arrow function
const chai3 = () =>{
    let username = "sampath"
    console.log(this.username)
}
// chai3()// output: undefined

// const addTwo = (num1, num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4))

//Implicit arrow function 
// const addTwo = (num1,num2)=> num1+num2

// () => return not required
// {} => return required
// const addTwo = (num1,num2)=> (num1+num2)

// () => required to return object with arrow function
// const addTwo = (num1,num2)=> ({username: "sampath"})



console.log(addTwo(3,4))