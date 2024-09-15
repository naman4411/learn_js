// literals in object

const mySym = Symbol("key1")

const JsUser = {
name: "Naman",
[mySym] : "mykey1",
age: 20 ,
Location: "Lucnknow",
email: "naman@salesforce.com", 
isLoggedIn:false,
lastLoginIn: ["monday", "tuesday"]
}

// **************we cAN access obj by two metods*********

// console.log(JsUser.email) 
// console.log(JsUser[mySym]) <= for sym don't use semicolon to access 

// how to freez an obj
JsUser.email = "naman@chatgptcom"
// Object.freeze(JsUser)
JsUser.email = "naman@nvidia.com"
// console.log(JsUser)

// ***************Function access by refernce**********

JsUser.greeting = function(){
    console.log("hello world")
}


// ***************Function access by objects**********

JsUser.greetingTwo = function(){
    console.log(`hello world,${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

