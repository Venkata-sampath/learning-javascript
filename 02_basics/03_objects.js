//singleton
//object.create()

//object literals

const mySym = Symbol("Key1")

const JsUser = { 
    name: "sampath",
    "full name": "Venkata sampath guthina",
    age: 21,
    [mySym]: "myKey1",
    email: "sampath@google.com",
    location: "hyderabad",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])

JsUser.email="sampath@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email ="sampath@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

