//Arrow Function

//This keyword

//example

// const user={
//     username: "Ojha",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);// this keyword is used to refer current context
//     }
// }
// user.welcomeMessage()



function check(){
   const username ="ojha"
    console.log(this.username);//undefiend .this doesnot work in function, it only works with object
}
check();

//another way to declare a function
const store = function () {
    const username ="ojha";
    console.log(this.username);//undefiend
}
store();

//arrow function declaration
const anotherFunction = () => {
    const username = "ojha";
    console.log(this.username);//undefiend
}
anotherFunction();

// arrow function example
const addTwo = (num1,num2)=> {
    return num1 + num2 ;
}
console.log(addTwo(23,43));

//arrow function as implicit return
const newFuntion = (num1 , num2) => (num1 + num2);
console.log(newFuntion(23,44));

//to return an object
const objVar = (num1,num2) => ({username: "ojha"});
console.log(objVar(2,3));