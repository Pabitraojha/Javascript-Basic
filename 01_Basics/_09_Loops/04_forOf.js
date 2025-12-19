//for of loop is basically used to iterate on some special datatypes (like Strings and arrays)

//Array
const array = ['bablu','gudu','ojha', 'pabitra','subrat','prafulla'];
for(const arr of array){
    console.log(arr);
}

//String
let str= "Pabitra Ojha";
for (let value of str){
    console.log(value);
}

//lets greeting as a string
const greetings ="hello developers";
for (const greet of greetings){
    console.log(greet);
}

// Map Basic : map is a js object  // keys and value must be unique
const mapVar= new Map();
mapVar.set("IN", "India");
mapVar.set("USA", "United States of America");
mapVar.set("Fr", "France");
console.log(mapVar);
//to iterate a map
for(const [key, value] of mapVar){
    console.log(key,':',value);
}

//for object
const myObj= {
    'game1': "BGMI",
    'game2': "freefair"
};
for(const obj of myObj){//object can't be iterable through forOf loop
    console.log(obj);
}