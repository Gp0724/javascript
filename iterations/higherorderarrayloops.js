
// for of loop

const arr =[1,2,3,4,5]
for(const num of arr){
    // console.log(num);
}

const greetings="Hello world!"
for(const num of greetings)
    {
        // console.log(num);
    }

const map= new Map()
map.set('IN',"India")
map.set('USA','united states')
map.set("FR","France")    

// console.log(map);

for (const i of map) {
    // console.log(i);
}

for(const [k,v] of map){
    // console.log(k, ':-', v);
}

//for in loop for iterating 
const myObj={
    js:'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
    // console.log(key);
}
for (const key in myObj) {
    // console.log(myObj[key]);
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming =["js","ruby","java","python","cpp"]
for (const key in programming) {
    //   console.log(programming[key]);  
    }

const mp= new Map()
mp.set('IN',"India")
mp.set('USA','united states')
mp.set("FR","France")   

for(key in mp){
    console.log(key);
}