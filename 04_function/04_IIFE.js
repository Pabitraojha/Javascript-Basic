// IIFE - immediately invoked Function Expressions
//used in JavaScript mainly to execute code immediately and keep variables private. 

function myFunction(){
    console.log("DB connected");
}
myFunction();

//the above function in IIFE
(function myFunction(){//Named IIFE (here function name is present)
    console.log("DB connected");
})(); //we have to add a ";" to end the function

// IIFE in arrow function
(() => {
    console.log("DB not connected");
})();

// lets pass a parameter 
((name) => {
    console.log(`my name is ${name}`);
})("Bablu");

// ******** How javascript execute code **********//
/* js executes cod eusing a single-threaded execution model with the help of execution context , call stack, web APIs , callback queue, microstack queue and event loop */
// it first execute the asynchronous code then handles asynchronous code using the event loop mechanism.
// Javascript engine: every browser has a javascript engine (V8 in chrome) .
//this engine consists of   1) memory heap : stores variable and objects.
//                            2) Call stack : execute code line by line

//Execution context: whenever js runs a program, it creates an execution context.
//mostly three types:    1) Global execution context : created first 
//                       2) function execution context : created for each function call
//                       3) Eval execution context 

//Each execution context has : 1) variable environment(variables and functions)
//                             2) lexical environment
//                             3)This keyword

//Two phases of execution : 
// Phase-1: Memory creation phase (hoisting)
// ->variables are allocated memory and set to undefined.
// -> funtion declarations are stored completely.
// -> No code is executed.
// Phase-2: Code execution phase: 
// -> code is executed line by line.
// -> variables get actual value. 
// -> Function are invoked. 

