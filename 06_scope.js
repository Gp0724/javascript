// scope is represented by {}
var c= 300

if(true){
    let a=10
    const b=20
    c =3 
}

// console.log(a)
// console.log(b)
// console.log(c)

function one()
{
    const username="Diamond"
    function two(){
        const website="flipkart"
        console.log(username)
    }
    console.log(website)
    two()
}

// one()

//++++++++++interesting stuff++++++++++
//keyword- hoisting

// console.log(addOne(6));
function addOne(temp){
    return temp+1
}

console.log(addTwo(10));
let addTwo=function(a){
   return a+2 
}