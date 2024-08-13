// primitive
// 7types: string ,boolean ,number , null , undefined , symbol , BigInt

const score = 100
const scorevalue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;


const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id === anotherId);


console.log(typeof outsideTemp)


// Refrence (non-primitive)
//arrays , objeects , functions

//Array=>Decleration
const heros = ["Shaktiman", "nagaraj", "doga"];

// Object inside curly brases{name:naman,""}
let Myobj ={
    name:"Naman",
    age: 20,
}
// function definition varibale treat

// const function(){} ==> syntax to define func


const Myfunction = function(){
console.log("hello world")
}
// to check type of function ==> use *typeof*
console.log(typeof bigint )
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //   Heap
// Heap Allocation=>
let myYoutubename = "namandotcom"
let anothername =  myYoutubename
anothername = "harrydotcom"
console.log(anothername)
console.log(myYoutubename)

// make sure put , "comma" at the end of the Line while changing line in object code

let userOne = {
    email: "user@cognizant.in",
    upi: "user@ybl"
}
let userTwo = userOne
// accessing object element like i have to change mail which is writen inside the object=>

userTwo.email ="naman@cognizant.in"
console.log(userOne)
console.log(userTwo)

