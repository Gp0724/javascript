function addnum(number1,number2){
   console.log(number1+number2) 
}

// addnum(2,3)
// addnum(2,"3")
// addnum("2",3)
// addnum(2,null)
// addnum("2",null)
// addnum(null,"2")
// addnum(null,2)

function addn(number1,number2)
{
    let result=number1+number2
    return result;
}

const val=addn(1,2)
// console.log(val)

function loginUserMessage(username="Idlivada")
{
    // if(!username){
    //     console.log("please enter a username")
    //     return 
    // }
    return `${username} just logged in`
}

// console.log(loginUserMessage())

function calcCartPrice(val1,val2,...num1){
    return num1;
}

// console.log(calcCartPrice(200,400,600,800))

function returnSecondVal(getarray){
    return getarray[1]
}

const newArray=[12,7,56,78]
console.log(returnSecondVal(newArray));
console.log(returnSecondVal([200,400,600,800]));
