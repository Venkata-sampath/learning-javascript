//for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(i===5){
        // console.log("5 is best number")
    }
    // console.log(element)
}


// Nested For loop
for (let i = 0; i <=10; i++) {
    // console.log(`Outer loop: ${i}`)
    for (let j = 0; j <=10; j++) {
        // console.log(`${i}*${j}=${i*j}`)
    }
}


// Loop  through Array elements with for loop
let myArr = ["flash","batman","superman"]
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element)
}


// break and continue
for (let i = 0; i <= 10; i++) {
    if(i===5){
        console.log("5 detected")
        break
    }
    console.log(i)
}

for (let i = 0; i <= 10; i++) {
    if(i===5){
        console.log("5 detected")
        continue
    }
    console.log(i)
}
