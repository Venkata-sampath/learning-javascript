// for each loop

// for each has a callback function
const coding = ["js", "ruby", "java", "py"]
coding.forEach( function (val){
    // console.log(val)
})


// using arrow function
coding.forEach((val) => {
    // console.log(val)
})


// normal function can also be passed as a reference
function printMe(item){
    // console.log(item)
}
coding.forEach(printMe)


// prints value, index of the value, and the entire array
coding.forEach( (item, index, arr) =>{
    // console.log(item, index, arr)
})


// accessing objects inside arrays with for each loop
const myCoding = [
    {
        languageName: "javascript",
        langaugeFileName: "js"
    },
    {
        languageName: "java",
        langaugeFileName: "java"
    },
    {
        languageName: "python",
        langaugeFileName: "py"
    },
]
myCoding.forEach((item)=>{
    console.log(item.langaugeFileName)
})

