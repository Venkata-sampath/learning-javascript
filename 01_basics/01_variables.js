const accountId = 144553
let accountEmail = "sampath@gmail.com"
var accountPassword = "1234"
accountCity = "Hyderabad"
let accountState;
// accountId = 2 // not allowed

console.log(accountId);

/*
prefer not use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState]);