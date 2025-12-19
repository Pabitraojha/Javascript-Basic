//For IN loop used to iteration of an object
const obj={
    name: "pabitra",
    age: "22",
    sex: "male"
}
for(const key in obj){
    console.log(key,":", obj[key]);
}

//for array
const arr =[10,20,30,40];
for(const key in arr){
    console.log(key,":", arr[key]);
}

//for string
let str= "welcome to javascript programming";
for (let key in str){
    console.log(key,":",str[key]);
}
//for map
const mapVar= new Map();
mapVar.set("IN", "India");
mapVar.set("USA", "United States of America");
mapVar.set("Fr", "France");
console.log(mapVar);
//to iterate a map
for(const key in mapVar){
    console.log(key,':',mapVar(key));
}