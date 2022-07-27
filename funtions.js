// Functions --> functions are the code used for avoid repeatation of code and it gives specific outcome.

// There are various ways to declare functions

//1. function statement OR function declaration
function simple() {
  console.log("This is function statemet or declaration");
}

//2.function expression
var greet = function () {
  console.log("This is function expression ");
};

//3. Arrow function
var namste = () => {
  console.log("This is arrow function");
};

//4.Anonymous Function ----> function with no name
var getName = function () {
  console.log("This is anonymous function");
};

//5. named function expression ---> same like function expression but contains the name.
var x = function xyz() {
  console.log("This is named function expression");
};

// immediatly invoked function expression(IIFE) or self executing function.
// it will executes first than other function.
(() => {
  console.log("this is IIFE");
})();

simple();
greet();
namste();
getName();
x();

console.log(carName);
var carName = "Audi";