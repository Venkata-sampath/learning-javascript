// js was intially only available in browser but later it was extracted and javascript environments were made. Popular js environments => Nodejs, Denojs etc

// single line comment

/*
multi line
comment
*/

// const => not possible to change
const accountId = 144553
// accountId = 2 // not allowed as const cannot be changed

// let => not possible to change
let accountEmail = "sampath@gmail.com"
// accountEmail = "rama@gmail.com" // allowed as let can be changed

//prefer not use var because of issue in block scope and functional scope
var accountPassword = "1234"

// prefer to mention let better for code readability and error free
accountCity = "Hyderabad"

// a variable can be just intialized without assigning anything
let accountState;

// use for printing in console in single line
console.log(accountId); // output: 144553

// use for printing in console in table for multiple values
console.table([accountEmail, accountPassword, accountCity, accountState]);