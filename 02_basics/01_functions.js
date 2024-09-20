// function sayMyName(){   
//     console.log("N");
//     console.log("a");
//     console.log("m");
//     console.log("a");
//     console.log("n");
// }
// sayMyName()

// *********it prints only => 11
// function addTwoNumbers(number1,number2){
//     console.log(number1+ number2)
// }
// addTwoNumbers(4,7)

// *********it prints => resuly =11
function addTwoNumbers(number1,number2){
    let result = number1+number2
    return result;
    // or do return number1+number2
}
 const result= addTwoNumbers(4,7)
 console.log("result: ", result);

 function loginUserMessage(username){
    return `${username} just Logged in`
 }
console.log(loginUserMessage(""))

// ***************if (statement) userName not present then it ask an msg*******
 function loginUserMessage(username){
    if(!username){
        console.log("please enter Username")
        return
    }
    // **********it not get executed if we use return upward**********
    return `${username} just Logged in`
 }
console.log(loginUserMessage(""))

// *******these 3 dots can make list and add on all the arguments in array otherwise only single parameter should be passsed
 function calculateCartPrice(...num1){
    return num1
 }
 console.log(calculateCartPrice(200,400,500));

//  **********acessing object using function**************



const user = {
    username: "naman",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

handleObject({
    username:"naman",
    price: 399
})