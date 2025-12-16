// function: block of reusable code that performs a specific task.
//- Define it once and call it whenever needed, which helps reduce repetition and makes code easier to understand and maintain.

// having two parts - function definition and function call
function myFunction(){///function definition
    console.log("hello");
}
myFunction();//function call


// function to add numbers
function sumNumber(num1,num2){
    return num1+num2;
    //console.log("hello"); //non-executible code
}
console.log(sumNumber(23,56));


//User login message
function loginUserMessage(username = "Pabitra"){//here Pabitra is a default value if the user does not pass any argument then this default value will ba execute.
    // if(username === undefined){}
    if(!username){
        console.log("please enter username");
        return;
    }
    return `${username} just logged in` ;
}
const value =loginUserMessage("ojha");
console.log(value);//ojha just logged in

//function
function calculateCarPrice(num1){
    return num1;
}
console.log(calculateCarPrice(25));//25 only for single argument

//another function
function carPrice(...num2){ // here ... is called as rest operator also it is called as spread operator as we seen in Array
    return num2;
}
console.log(carPrice(2,55,343,34));//used for multiple value

//another function
function Price(value1,value2, ...num1){
    return num1;
}
console.log(Price(10,20,30,40,50,60));//[ 30, 40, 50, 60 ] 


//object
const user= {
    username: "ojha",
    price: 200
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);//passing by object name
handleObject({
    username: "pabitra",
    price: 777
});//passing object value

//Array
const myNewArray =  [10,20,30,40,50];
function returnSecondValue(anyArrayName){
    return anyArrayName[1];
}
console.log(returnSecondValue(myNewArray));//pasing by array name
console.log(returnSecondValue([300,400,500,600,60000]));//passing value