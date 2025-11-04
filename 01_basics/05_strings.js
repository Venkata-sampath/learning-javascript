let name = "sampath"
let repoCount = 20

// console.log(name + repoCount + " Value")// old version of printing text with variables

// console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`)// new version of printing text with variables called "String interpolation" using backticks(``)

const gameName = new String("Sampathtd")// makes a string object which provides multiple string methods

// console.log(gameName[0]);// returns charater at 0th position 
// console.log(gameName.__proto__)// all string methods are children of protoype object

// console.log(gameName.length)// returns length of the string
// console.log(gameName.toUpperCase())// returns string in uppercase
// console.log(gameName.charAt(2))// returns charAt index 2
// console.log(gameName.indexOf('t'))// returns the index of the char 't'

const newString = gameName.substring(0,4)
console.log(newString)// returns substring of gameName

const anotherString = gameName.slice(-8,4)
console.log(anotherString)// same like substring but negative values can be given

const newStringOne = "   sampath    "
console.log(newStringOne)
console.log(newStringOne.trim())// removes whitespaces and newline characters

const url = "S%mpath"
console.log(url.replace('%', 'a'))// replaces a char with another char
console.log(url.includes('th'))// returns true/false if the input is present or not

const names = "sampath-hitesh-ravi"
console.log(names.split('-'))







