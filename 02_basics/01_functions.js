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

