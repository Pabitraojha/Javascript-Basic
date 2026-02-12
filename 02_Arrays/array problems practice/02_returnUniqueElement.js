// Return the number of unique elements
// const array=[1,2,4,1,4,5,6,5,10];
// const fun=(arr)=>{
//     let uniqueArray=new Set(arr);
//     console.log(uniqueArray.size);//this only return the unique element
// }
// fun(array)

// or
const array=[1,2,4,1,4,5,6,5,10];
const fun= (arr)=>{
    return [...new Set(arr)];//it return only unique elements
}
console.log(fun(array));
