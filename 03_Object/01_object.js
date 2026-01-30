//----------Object ------------//
/*an object is a collection of key–value pairs.
-It is used to store related data and functions together.
*/

//Two way to create an object

/*1) object literals
  -An object literal is the simplest and most common way to create an object.
  -Syntax:
        let obj = {
        key1: value1,
        key2: value2
        };
*/
let person = {
  name: "Aditya",
  age: 22,
  isStudent: true
};
// another example
let car = {
  brand: "Tesla",
  "full name": "Bablu",///can't access this name with ( . ) that's why we use ( [])
  model: "Model S",
  start: function () {
    console.log("Car started");
  }
};
console.log(car);
//To change value of a key in object
car.model="hx23";
console.log(car.model);
console.log(car);

//to freeze an object, that means no further modification
Object.freeze(car);
car.model="hdsj3";
console.log(car);//no change


// to access object properties
console.log(car.brand);
console.log(car["brand"]);

// console.log(car[full name); can't access this with " . "
console.log(car['full name']);


// use in Symbol primitive datatype
/*syntax:
     const mySymbol = Symbol();

=> With description (for debugging):
        const id = Symbol("userId");
        👉 "userId" is the description of the Symbol.
        ✔️ Much easier to understand what the Symbol represents
=> symbol is unique
        Symbol("a") === Symbol("a"); // false
*/

//Symbol in object
const mySym = Symbol("key1");

const obj = {
    [mySym]: "value"  
};
console.log(obj[mySym]);



const man ={
    name: "ojha",
    weight: "63",
    height: "5.7"
}

man.greeting= function(){// expression function as an object method
    console.log("Hello....js user");
}
man.greeting2 = function(){
    console.log(`hello js user ${this.name}`);//here "this" is used to reference to same object
}
console.log(man.greeting());
console.log(man.greeting2());