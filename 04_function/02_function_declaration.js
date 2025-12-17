// there are several ways to declare a function in javascript

// 1st way 1️⃣ Function Declaration
function greet(){
    console.log("Good morning");
}
//✅ Hoisted
//✅ Most traditional form

//2nd way  2️⃣ Function Expression
let greet = function(){
    console.log("hello")
}
//❌ Not hoisted
//✅ Stored in a variable

//3rd way  3️⃣ Arrow Function (ES6)
const greet = () => {
    console.log("hello");
};
//❌ Not hoisted
//✅ Shorter syntax
//❌ No this, arguments


//4th way  4️⃣ Anonymous Function
setTimeout(function () {
  console.log("Hello");
}, 1000);
//✅ No function name
//⚠️ Usually used as callbacks


//5th way  5️⃣ Named Function Expression
const greet = function sayHello() {
  console.log("Hello");
};
//✅ Useful for recursion & debugging


//6th way 6️⃣ Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("Hello");
})();
//✅ Runs immediately
//✅ Avoids global scope pollution


// 7th way 7️⃣ Constructor Function
function Person(name) {
  this.name = name;
}
const user = new Person("Bablu");
//✅ Used to create objects
//⚠️ Not recommended for general functions


// 8th way
// Function created using Function constructor
const greet = new Function("console.log('Hello')");