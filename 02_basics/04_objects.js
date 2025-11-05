// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id="123abc"
tinderUser.name="sampath"
tinderUser.isLoggedIn=true

// console.log(tinderUser)

const regularUser = {
    fullname: {
        userfullname: {
            firstname: "sampath",
            lastname: "guthina"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    }
]

// console.log(users[1].email)
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLogged"))

// ***********************************destructuring*******************************

const course = {
    course: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor)

console.log(instructor)

//JSON is used for communicating between client and server in web
//JSON is an object
// {
//     "name": "sampath",
//     "age": "21"
//     "email": "sampath@gmail.com"
// }

//objects within arrays as JSON 
// [
//     {},
//     {},
//     {}
// ]