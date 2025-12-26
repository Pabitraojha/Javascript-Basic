// using loop
// let n=15;
// let a=0, b=1;
// for(let i=1;i<=n;i++){
//     console.log(a);
//     let next = a+b;
//     a=b;
//     b=next;
// }

// using recursion 
// let n=15;
// function fib(n) {
//     if(n<=1) return n;
//     return (fib(n-1)+ fib(n-2));
// }
// for(let i=0; i<n; i++){
//     console.log(fib(i));
// }

// using array
let n=15;
let fib=[0,1];
for(let i=2;i<n; i++){
    fib[i]=fib[i-1]+fib[i-2];
}
console.log(fib);
