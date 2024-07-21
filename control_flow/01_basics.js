// console.log(2=="2");
// console.log(2==="2"); //checks datatype as well


const balance= 10000
// if(balance>500) console.log("test");
// if(balance>500) console.log("test"),console.log("test2"); //bad practice

let userLoggedIn= true
let debitCard=true
if(userLoggedIn && debitCard) {
    // console.log("allow to buy course")
}

let loggedInFromEmail=true
let loggedInFromGoogle=false

if(loggedInFromEmail || loggedInFromGoogle){
    // console.log("user logged in")
}

// const month=15
// switch (month) {
//     case 1:
//         console.log("Jan"); 
//         break;
//     case 2:
//         console.log("Feb"); 
//         break;
//     case 3:
//         console.log("Mar"); 
//         break;
//     case 4:
//         console.log("Apr"); 
//         break;
//     case 5:
//         console.log("May"); 
//         break;

//     default:
//         console.log("What ra, you don't even know there are 12 months only")
//         break;
// }


//Nullish Coalescing Operator (??) for cases where null is undefined
//best use case in handling databases

let val1;
val1=5 ?? 10
console.log(val1);

val1= undefined ?? 10
console.log(val1);

val1= null ?? 15
console.log(val1);

val1= null ?? 10 ?? 20
//first valid value is taken
console.log(val1);

//ternary operator
const snacksPrice =100
snacksPrice<=80 ? console.log("less than 80") : console.log("more than 80")
