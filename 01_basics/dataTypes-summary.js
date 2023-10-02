// primitive

// 7 types: String, number, Boolean, null, undefined, 
//   Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 3564467465754875336764n

// Reference type or non primitive

// Array, objects, functions

const heroes = ["shaktiman", "nagraj", "doga"];
let myObj ={
    name :"Ashutosh",
    Age: 22
}
const myFunction = function(){
    console.log("Hello world");
}

//++++++++++Memories+++++++++++++++++++++++++

//Stack (Primitive), Heap(Non-Primitive)

let myYoutubename = "hiteshchaudharydotcom"

let anotherName = myYoutubename
anotherName = "chaiaurcode"

// console.log(anotherName);
// console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne);
console.log(userTwo);