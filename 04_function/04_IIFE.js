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