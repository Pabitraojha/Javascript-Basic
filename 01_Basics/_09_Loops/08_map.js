const numbers=[1,2,3,4,5,6,7,8,9];
// //add 10 in each index value of this array
// const newNums=numbers.map((num)=>{
//     return num+10;
// });
// console.log(newNums);


//chaning
const newNums = numbers
                    .map((num)=>num*10)
                    .map((num)=>num+1)
                    .filter((num)=> num>=40)
console.log(newNums)                    