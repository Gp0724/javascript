


const number=[1,2,3,4,5,6,7,8]
let newNumber=number.map((num)=> num+10)
// console.log(newNumber);

newNumber=number.map((num)=> {
    return num+20
}) 

// console.log(newNumber);

//chaining 

newNumber = number
            .map((num) => num*10)
            .map((num) => num+1)
            .filter((num) => num >=40)
    
// console.log(newNumber);            


const array=[1,2,3]
// let myTotal =array.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
// },0)

// console.log(myTotal);
// let total=  array.reduce((acc,currval) => acc+currval, 0)
// console.log(total);

const shoppingCart =[
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "python",
        price: 1999
    },
    {
        itemName: "cp",
        price: 6999
    },
    {
        itemName: "data science",
        price: 12999
    }
]

const priceToPay= shoppingCart.reduce((acc,item) => acc+item.price, 0)
console.log(priceToPay);