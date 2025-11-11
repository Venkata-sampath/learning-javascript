//reduce
//accumulator and current value. start with an intial value

const myNums = [1,2,3]

// with regular function
// const myTotal = myNums.reduce(function(acc, currval) {
//     return acc+currval
// },0)


// with arrow function
const myTotal = myNums.reduce((acc,curr) => (acc+curr),0)
// console.log(myTotal)


//real life example
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 1999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((total,curr) => (curr.price+total),0)
console.log(totalPrice)