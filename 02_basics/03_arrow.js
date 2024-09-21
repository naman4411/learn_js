const user ={
    username:"naman",
    price :999,

    welcomeMessage :function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this) ****************thiis is only used in obj using arrow func*****
    }
}
user.welcomeMessage() 
user.username="sam" 
user.welcomeMessage()    

// // ****************we can't use this in Arrow function ********************
//  const chai = () =>{
//     let username ="Naman"
//     console.log(this.username);
//  }
//  chai()

// // ********in arrow functin we use arrow***********
// const addTwo = (num1, num2)=>{
//     return num1 + num2 
// }
// console.log(addTwo(5,7))

// const addTwo = (num1 , num2)=>(num1+num2)
// console.log(addTwo(7,7))
const addTwo = (num1 , num2)=>num1+num2
console.log(addTwo(7,8))