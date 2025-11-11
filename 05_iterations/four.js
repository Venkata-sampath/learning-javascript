// for in loop (prints only keys)

// for in loop works for looping through object
const myObject = {
    js: "javascript",
    py: "python",
    cpp: "c++",
    java: "java"
}
for (const key in myObject) {
    // console.log(key) // prints only keys
    // console.log(myObject[key]) // prints only values
}


// looping through array with for in loop
const programming = ['js','java','py','cpp']
for (const key in programming) {
    // console.log(key) // output : 0 \n 1 \n 2 \n 3
    // console.log(programming[key]) // output: js \n java \n py \n cpp
}


// maps are not iterable with for in loop
const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
for (const key in map) {
    // console.log(key) // check output
}



