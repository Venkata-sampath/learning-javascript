// Immediately invoked function expressions (iife)

(function chai(){
    //named iife
    console.log("DB connected")
})(); // ; used for ending the function

((name)=>{
    console.log(`DB connected Two ${name}`)
})("sampath") // pass argument here