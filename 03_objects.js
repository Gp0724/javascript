//object literals
const mysym= Symbol("key1")
const obj={
    [mysym]: "mykey1",//this declartion does take the symbol as key 
    name : "Diamond",
    "full name":"Dustin Diamond Poirier",
    age: 112,  
    location:"Mars",
    email: "martian@gmail.com",
    LoggedIn: false,
    lastLoggedIn: ["Monday","Saturday"]
}

// console.log(obj)
// console.log(obj.name)
// console.log(obj["name"])
// console.log(obj["age"])
// console.log(obj["full name"])

// console.log(obj[mysym])
// console.log(typeof(obj[mysym]))

obj.email="diamondpoirier@gmial.com"
// console.log(obj.email)
// Object.freeze(obj) 
obj.email="bright@gmial.com"
// console.log(obj.email)

obj.greeting = function(){
    console.log("Hello there");
}

// console.log(obj.greeting)
// obj.greeting()

obj.greetingTwo = function(){
    console.log(`Hello there, ${this.name}`);
}

obj.greetingTwo();
