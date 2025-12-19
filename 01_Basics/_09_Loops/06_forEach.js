//for each loop: known as higher order function because it take function as an argument.
//only be used for array not for string.
//when function pass as an argument called as a Callback.
//In callback function there is no name of the function.
const coding=["c","c++","java","python","HTML"];
// coding.forEach( function (item){
//     console.log(item)
// });

// // as arrow function
// coding.forEach( (value) => {
//     console.log(value);
// })

// //passing in a function 
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);


// // There are 3 parameters in forEach loop
// coding.forEach((value, index, array)=> {
//     console.log(value,index, array);
// })

const myCoding =[
    {
        languageName : "javascript",
        languageFile: "js"
    },
    {
        languageName : "java",
        languageFile: "java"
    },
    {
        languageName : "pyhton",
        languageFile: "py"
    }
]

myCoding.forEach((item)=> {
    console.log(item.languageFile);
})