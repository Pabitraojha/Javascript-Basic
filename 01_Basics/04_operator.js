//1.Arithmetic operator
console.log(2+2);// Addition
console.log(2-2);// Subtraction
console.log(2*2);// Multiplication
console.log(2**2);// Power
console.log(2/2);// Divide
console.log(2%2);// Modulus (give remainder)

// ---------- 2. Assignment Operator ----------- //
 /* 1. = - a=20 for assign value
    2. += - a=a+5 or a+=5;
    3. -= - a=a-3 or a-=3;
    4. *= - a=a*5 or a*=5;
    5. /= - a=a/3 or a/=3;
*/

//--------------- 3. Comparison operator ---------//
/* 1. == (equal to)
    2. === (strict equal to)
    3. != (not equal to)
    4. !== (Strictly not equla to)
    5. < (less than)
    6. > (greater than)
    7. >= (greater than equal)
    8. <= (less than equal)
*/

// =========     4. Logical operator   =========//
/*  && - AND
    || - OR 
    ! - Not
*/

//----------- 5. Bitwise operator ----------/
/*  &- AND 
    ^ - XOR
    ~ - NOT
    << - left shift
    >> - Right shift
*/

//------------- 6. Unary Operator ------------//
/*  increment (++) and decrement (--)
   pre-increment , post-increment
   pre-decrement , post-decrement
   */

// ------------ 7. Ternary Operator -------------//
/*   
        condition? value1:value2;

*/

//javascript allows us to compare two different value having different datatypes

console.log("3" < 1); //false
console.log("002" > 1); // true

console.log(null > 0); // false
console.log(null == 0); //false
console.log(null >= 0 ); //true (here value conversion )
/* here the reason is that an m equality chek == and comparisons >, < , >= , <= works differently. 
comparisions convert null to a number, treating it as 0. That's why null >= 0 is ture and null > 0 is false.