// const MyArry= [0,1,2,3,4,5]
const Myheros = ["shaktiman", "ironman"]

const myarr2 = new Array(0, 1, 2, 3, 4)

console.log(myarr2[0]);

// Array methods
// MyArry.push(6)
// MyArry.pop()
// MyArry.unshift(9)
MyArry.shift()
console.log(MyArry);

// const MyArry = [0, 1, 2, 3, 4,5]
// const newArry = MyArry.join () //join can convert type of arry to string 
// console.log(typeof MyArry)

// slice,spice
const MyArry = [0, 1, 2, 3, 4, 5]
console.log("A", MyArry);
const myn1 = MyArry.slice(1, 3)

console.log(myn1);

// splice
const MyArr = [0, 1, 2, 3, 4, 5]
console.log("A", MyArr);
const myn2 = MyArr.splice(1, 3)

console.log(myn2);

// const Marvel_heros = ["ironman", "Thor", "hawkeye"]
// const dc_heros = ["superman", "batman", "Wonderwomen"]

// Marvel_heros.push(dc_heros)
// console.log(Marvel_heros)
// const all_hereos = Marvel_heros.concat(dc_heros) => you can add on one array at a time where spread can add multiple arrays

// console.log(all_hereos[4])

// console.log(0.1+0.2==0.3)

const Marvel_heros = ["ironman", "Thor", "hawkeye"]
const dc_heros = ["superman", "batman", "Wonderwomen"]

const all_heros = [...Marvel_heros,...dc_heros]
console.log(all_heros)

console.log(Array.isArray("naman"))
console.log(Array.from({name:"naman"})) //=>intresting
