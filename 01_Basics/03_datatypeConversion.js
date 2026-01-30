// javascript converts data types in two Ways:
//                 1) Explicit (Type Casting)
//                 2) Implicit (Type Coercion)
// 1) In explicit conversion we have to convert the datatypes manually
//         let age= "23bed";
//         let valueInNumber = Number(age);
// 2) In implicit type conversion the javascript converts the datatype automatically behind the scenes.
//             let result= "5" + 2;
//             console.log(result); //52
//             console.log(typeof result);//string

let score = 43;
console.log(typeof score);

let age = "23bed";
console.log(typeof age);

let valueInNumber = Number(age); //string to number conversion
console.log(typeof valueInNumber); //this will convert string to number
console.log(valueInNumber); //here it will print NAN (not a number)

// "33" => 33 easily convert
// "33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1=> true; 0 => false;
// "" => false;
// "ojha" => true;

let sumNumber = 33;
let stringNumber = String(sumNumber);
console.log(typeof stringNumber);

// ************************ Operations ************************
let value = 3;
let negValue = -value; //this will convert value into negative
console.log(negValue);

console.log(2 + 2); // Addition
console.log(2 - 2); // Subtraction
console.log(2 * 2); // Multiplication
console.log(2 ** 2); // Power
console.log(2 / 2); // Divide
console.log(2 % 2); // Modulus (give remainder)

let str1 = "pabitra";
let str2 = "Ojha";
let str3 = str1 + str2; // String concatenation
console.log(str3);

console.log("1" + 2); // output 12
console.log(1 + "2"); // output 12
console.log(1 + 2 + "3"); // output 33
console.log("1" + 3 + 2); // output 132
console.log(3 + 4 * 5 - ((8 / 2) % 2)); // output 23

console.log(true); // output true
console.log(+true); // output 1
// console.log(true+)  (give error)
console.log(+""); //output 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++; // post increment
console.log(gameCounter);
++gameCounter; // pre increment
