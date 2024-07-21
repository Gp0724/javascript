let userEmail= "Diamond.ai"

if(userEmail){
    console.log("got user email");
}

else {
    console.log("no user email");
}

//falsy values
//false, 0, -0, BigInt 0n, "",null, undefined, NaN

// truthy values
// true,"0",'false'," ",[] (empty array), {} (empty object),   function(){}
                                                                //  empty function   

 userEmail=[]                                                               
if(userEmail.length===0){
    console.log("array is empty")
}          

const emptyObj= {}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}
