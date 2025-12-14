// const balance = new Number(100); //explicitly convert to number
// console.log(balance);//[Number:100]

// console.log(balance.toString().length);//3
// console.log(balance.toFixed(3));//100.000 after decimal 3 zeros.
// console.log(balance.toFixed(2));//100.00

// const otherNumber= 833.8223;
// console.log(otherNumber.toPrecision(5));//834

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString());//10,00,000 by default USA standard.
// console.log(hundreds.toLocaleString('en-IN'));// in Indian format



// ------ Math ---------//
console.log(Math);
console.log(Math.abs(-4));//abs for absolute value this will change negative to positive value.
console.log(Math.round(2.343));//for round value
console.log(Math.ceil(2.344));//used for ceiling value
console.log(Math.floor(23.923));//used for floor value
console.log(Math.pow(4,2));//use to find the power (4**2=16 -modern operator)
console.log(Math.sqrt(4));//used to find square root
console.log(Math.min(1,3,1,645,645,88));//find min number
console.log(Math.max(23,53,63,1,2434,676));//find max number

//****IMPORTANT***//
console.log(Math.random());//use to generate random number and value in between ( 0 to 1)
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min +1))+min);//important

