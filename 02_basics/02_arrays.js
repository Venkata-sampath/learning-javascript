const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)// adds the array as a new element

const allHeros = marvel_heros.concat(dc_heros)// combines two or more arrays and returns a new array
// console.log(allHeros)

const all_new_heros = [...marvel_heros, ...dc_heros]// [...] is a spread operator which spreads inner elements
// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // reduces the dimensions in an array
// console.log(real_another_array)

console.log(Array.isArray("Hitesh"))// validates array or not
console.log(Array.from("sampath"))// converts to array
console.log(Array.from({name: "sampath"}))// interesting

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1, score2, score3))// makes an array 