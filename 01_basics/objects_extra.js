// const tinderUser = {}

// tinderUser.id = "123abc",
// tinderUser.name = "vivek",
// tinderUser.isLoggedIn = false
// // console.log(tinderUser);

// const regularUser ={
// email: "some@gmail.com",
// fullname:{
//     userfullname:{
//         firstname:"naman",
//         Lastname : "vishvakarma"
//      }
// }
// }
// console.log( regularUser.fullname)

// ****************Adding Two Objects like array********************
const obj1= {1:"a", 2:"b"}
const obj2= {3:"a", 4:"b"}

// const obj3= Object.assign( {},obj1,obj2)<= 2nd method
// const obj3={...obj1,...obj2} <=1method
// console.log(obj3);

const course ={
    coursename : "js inhindi ",
    price:"999",
    courseInstructor: "Naman",
}
// restructuring of objects suppose i like to extract the value of CI
// restructuring=>
const {courseInstructor : Mentor} =course 

// console.log(courseInstructor)
console.log(Mentor)

// JSON API CALL
// {
//     "name":"Naman",
//     "coursename": "js in  hindi",
//     "Price" : "Free"
// }



