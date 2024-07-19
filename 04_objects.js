const appUser= new Object() //singleton object
const appU= {} //non-singleton object
// console.log(appUser)// {}

appUser.id="124"
appUser.name="Dustin Poirier"
appUser.isLoggedIn=false

// console.log(appUser)
const regularUser= {
    email: "diamond@gmail.com",
    fullname: {
       userfullname:{
         firstname:"Leo",
        lastName: "Messi"
       }
    }
}

// console.log(regularUser.fullname)
// console.log(regularUser.fullname?.userfullname)

const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}
const obj3={5:"a",6:"b"}

// obj4={...obj1,...obj2,...obj3}
// console.log(obj4)

// Object.assign(obj1,obj3);
// Object.assign(obj1,obj2);
// Object.assign(obj1,obj2);

// console.log(obj1)

// console.log(appUser)
// console.log(Object.keys(appUser))
// console.log(Object.values(appUser))
// console.log(Object.entries(appUser))

// console.log(appUser.hasOwnProperty('isLoggedIn'))


//destructuring of object
const course={
    name:"cp",
    cost:"7999",
    courseInstructor:"Elon Musk"
}

const {courseInstructor: instructor}=course
console.log(instructor)

