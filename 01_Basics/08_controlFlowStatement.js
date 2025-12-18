//------------- if Statement ----------//
//syntax: if(conditon){ ---this code will execute----- }

// const var1= 10;
// const var2= 20;
// if(var1 === var2){
//     console.log("equal value");
// }

// ********short hand code //donot do this (not professional)
// const balance= 1000;
// if(balance> 500) console.log("test"), console.log("test2");


//---------- if else statement-----------//
// const name="ojha";
// const anoName="Bablu";
// if(name === anoName){
//     console.log("equal");
// }else{
//     console.log("not equal");
// }

//---------- elseif statements-------------//
//example
// let age=20;
// if(age<18){
//     console.log("under 18");
// }else if(age> 18 && age < 60){
//     console.log("in between 18 to 60");
// }else{
//     console.log("above 60");
// }

// *********** Switch Statement ************//
//         //syntax: switch(key){
//                     case value1: 
//                             break;
//                     case value2:
//                             break;
//                     default:
//                             break;
//                     }


//example
const month = 8;
switch(month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("apirl");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default: 
        console.log("please enter a valid month number")
        break;
}


// Falsy value
/*  1) false
    2) 0
    3) -0
    4) bigInt 0n
    5) "" -empty String
    6) null
    7) undefined
    8) Nan
*/
// Truthy Value
/* Except falsy value all are true.
   - "0"
   - 'false'
   - " "
   - [] (empty array)
   - {} (empty object)
   - function(){} (empty function)
*/

// empty array check
const arr = [];
if(arr.length=== 0){
    console.log("Array is empty");
}

// empty object check
const obj = {};
if(Object.keys(obj).length===0){
    //Object.keys(obj) - this return an array
    console.log("empty object")
}

// ***** IMPORTANT ******//
// 1- false == 0 : true
// 2- false == '' : true
// 3- 0 == "" : true


// *********** Nullish Coalescing operator (??): Null and undefiend****** //
let val1;
val1  = 5 ?? 10;
console.log(val1);//5
val1 = null ?? 20;
console.log(val1);//20
val1 = undefined ?? 12;
console.log(val1);//12
val1 = undefined ?? null ;
console.log(val1);//null
val1= null ?? undefined;
console.log(val1);//undefiend

// Terniary operator
//Syntax: condition ? true : false ;
let a=17, b=14;
a<14 ? console.log("b is greater") : console.log("a is greater");