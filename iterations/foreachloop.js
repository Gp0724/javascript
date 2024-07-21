const programming =["js","ruby","java","python","cpp"]
programming.forEach( function (val){
    // console.log(val);
})


function callme(item){
    // console.log(item);
}
programming.forEach(callme)
programming.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

//array of objects
const mycoding=[
    {
        language:"javascript",
        extension: "js"
    },
    {
        language:"c++",
        extension: "cpp"
    },
    {
        language:"java",
        extension: "java"
    }
]

mycoding.forEach( (item) => {
    // console.log(item.language);
})

const coding =["js","ruby","java","python","cpp"]
const values=coding.forEach( (item) => {
    // console.log(item);
    return item;
})

// console.log(values);

let nums=[1,2,3,4,5,6,7,8,9,10]
const newnums= nums.filter( (num) =>{
    return num > 4 
})
// console.log(newnums);

//use of foreach to get this result

const newNums=[]

 nums=[1,2,3,4,5,6,7,8,9]
nums.forEach((num) => {
    if(num>4){
        newNums.push(num)
    }
})

console.log(newNums);