const arr1=[1,2,3,4,4,5];
const arr2=[3,4,5,6];
function intersectionUnique(a,b){
    let setA = new Set(a);
    let result=new Set();

    for(let num of b){
        if(setA.has(num)){
            result.add(num);
        }
    }
    return [...result];
}
console.log(intersectionUnique(arr1,arr2));
