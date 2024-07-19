//IIFE-Immediately Invoked Function Expressions
(function() {
    console.log("This is an IIFE!");
})();

(function Hello(){ //named IIFE
    console.log("hello world!");
})();

( ()=> {
    console.log("How r u all?");
})();


(function(num1){
    console.log(num1+10)
})(10)

const ans=(function(num1){
    return (num1+10);
})(10);

console.log(ans);