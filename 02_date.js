// let myDate= new Date()
// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate);
// let newDate= new Date(2024,0,7);
// console.log(newDate.toDateString());

// let d= new Date(2024,2,23,16,3);
// console.log(d.toLocaleString());

// yy-mm-dd
let myCreatedDate= new Date("2024-06-01");
// console.log(myCreatedDate);

myCreatedDate= new Date("2024-14-01");
// console.log(myCreatedDate);

//mm-dd-yy
myCreatedDate= new Date("01-14-2024");
// console.log(myCreatedDate);

let Timestamp= Date.now();
console.log(Timestamp);
console.log(myCreatedDate.getTime());
//seconds
console.log(Math.floor(Date.now()/1000));
let d= new Date(2024,2,23,16,3);
console.log();
 