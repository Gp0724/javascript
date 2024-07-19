const user={
    username: "Dustin",
    mail: "helloworld@gmail.com",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our website`)
    }
}
// user.welcomeMessage()
// console.log(this)

// const addTwo= (num1,num2) =>{
//     return num1+num2
// }


// const addTwo= (num1,num2) => num1+num2
const addTwo= (num1,num2) => (num1+num2)
// console.log(addTwo(3,4))

const objfn = () => ({username:"Dustin"})
// console.log(objfn());


 




