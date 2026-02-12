// problem states that create a function  and function return true if the array doesn't have any duplicate if it contains duplicate then return false.
const arr=[1,2,3,4,5,6];
const comparision=(array)=>{
    if(new Set(array).size!== array.length)return false;
    return true;
}
console.log(comparision(arr));