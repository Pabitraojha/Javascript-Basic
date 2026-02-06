//Javascript arrays are resizable and can conatin a mix of different datatypes.
const myArr = [0,1,2,3,4,5, "sjhf", true]; // array declaration
console.log(myArr[0]);
const name=["Bablu", "Gudo","Dudu","Abhijit"];
console.log(name);
console.log(name.length);//used to check the length of an array

//*****array methods***********//

//push(): add element at end
name.push("Deepika");
console.log(name);//[ 'Bablu', 'Gudo', 'Dudu', 'Abhijit', 'Deepika' ]


//pop() : delete element at end
name.pop();
console.log(name);//[ 'Bablu', 'Gudo', 'Dudu', 'Abhijit' ]  


//unshift() : add element at the start
name.unshift("Benguli");
console.log(name);//[ 'Benguli', 'Bablu', 'Gudo', 'Dudu', 'Abhijit' ]


//shift() : remove element from the start
name.shift();
console.log(name);//[ 'Bablu', 'Gudo', 'Dudu', 'Abhijit' ]


//includes() : to check an element is present in the array or not
console.log(name.includes("hello"));//false

//index()
console.log(name.indexOf(2));// -1 for non-existing element here two is a number value not present in the array element.
console.log(name.indexOf("Dudu"));//2


// join(): it convert array into a string by joining all its elements with a specified separator
//It allows with custom separator but toString() doesnot support it works its by default (i.e ",")
const newArray = name.join();
console.log(name);//[ 'Bablu', 'Gudo', 'Dudu', 'Abhijit' ] 
console.log(newArray);//Bablu,Gudo,Dudu,Abhijit
console.log(typeof newArray);//string

//toString(): used to convert array elements into strings
console.log(name.toString()); //Bablu,Gudo,Dudu,Abhijit


//concat() : used to concat two array elements
console.log(myArr.concat(name));// it will concat two arrays into a single array


//slice(): returns a piece of an array
const myarr = myArr.slice(1,4);
console.log(myarr); //[ 1, 2, 3 ]


//splice() : used to add , remove and replace elements in an array. 
// It changes the original array.
//It supports negative index
// Syntax: splice(startIndex, deleteCount, item1, item2, item3.....)
const arr =[10,20,30,40,50,60,70,80,90];
arr.splice(2,2);//remove elements
console.log(arr)//[10, 20, 50, 60,70, 80, 90]

arr.splice(2,0,12,13,14);//Add elements
console.log(arr);//[10, 20, 50, 60,70, 80, 90]

arr.splice(2,2,15,14);//Replace elements
console.log(arr);//[10, 20, 15, 14, 14, 50, 60, 70, 80, 90]

arr.splice(-6,3);//Negative Index
console.log(arr);//[10, 20, 15, 14, 70, 80, 90]

//Spread operator
const a = [1,2,3,4,5,6,7];
const b = [768,98,465,2542,33];
const c = ["sd","er","ewt"];
const newD= [...a,...b,...c];//concat all elements of array
console.log(newD);

//flat 
const another_array= [1,2,3,[4,5,6],7,[3,4,[5,6,7]]];
console.log(another_array);
const real_array = another_array.flat(Infinity);
console.log(real_array);//it will print all nested array in a single array

// isArray and from
console.log(Array.isArray("ojha"));//check ojha is an array or not
console.log(Array.from("Ojha"));// convert into an array     [ 'O', 'j', 'h', 'a' ]

//Array.of
const score1=100;
const score2=200;
const score3=300;
console.log(Array.of(score1,score2,score3));//convert values into an array

//array element access
let newarr= [10,20,30,40,50,60];
for ( let i=0; i<newarr.length; i++){
    console.log(newarr[i]);
}

//array sorting
//  we use sort  ((a,b)=>a-b)--- for ascending
//               ((a,b)=>b-a)--- for descending
let array=[2,3,6,7,1,4,9,5];
const sortArray=array.sort((a,b)=>a-b);//Ascending order
console.log(sortArray);

const sortArr= array.sort((a,b)=>b-a);
console.log(sortArr); // Descending order

  