//Dates

let myDate= new Date()
// console.log(myDate.toString()) // output: Mon Nov 10 2025 10:46:36 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()) // output: Mon Nov 10 2025
// console.log(myDate.toLocaleString()) //output: 11/10/2025, 10:46:36 AM
// console.log(typeof myDate) // output: object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("2023-01-23")
// console.log(myCreatedDate.toLocaleString()) // output: 1/23/2023, 12:00:00 AM

let myTimeStamp = Date.now()

// console.log(myTimeStamp) // output: 1762771720271
// console.log(myCreatedDate.getTime()) // output: 1674432000000
// console.log(Math.floor(Date.now()/1000)) // output: 1762771754

let newDate = new Date()
// console.log(newDate) // output: 2025-11-10T10:49:49.562Z
// console.log(newDate.getDay()) // output: 1 to 7
// console.log(newDate.getMonth()) //output: 0 to 11


// custom format date for output
 
// console.log(newDate.toLocaleString('default', {
//     weekday: "short"
// }))
