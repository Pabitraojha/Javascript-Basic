// using loop
// let num=15;
// let fact=1;
// for(let i=num;i>0; i--){
//     fact=fact*i;
// }
// console.log(fact);

// using recursion  [n!= n* (n-1)!]
function factorial(num){
    if(num===0)return 1;
    return num* factorial(num-1);
}
console.log(factorial(0));