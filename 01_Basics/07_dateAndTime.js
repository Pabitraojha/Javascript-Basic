//**** DATE and TIME********//
let myDate = new Date();// declaring a date

console.log(myDate);//can't understandable- 2025-12-14T11:26:52.582Z
console.log(myDate.toString());//Sun Dec 14 2025 16:56:52 GMT+0530 (India Standard Time)
console.log(myDate.toISOString());//2025-12-14T11:26:52.582Z
console.log(myDate.toDateString());//Sun Dec 14 2025
console.log(myDate.toJSON());//2025-12-14T11:28:39.479Z
console.log(myDate.toLocaleDateString());// 14/12/2025
console.log(myDate.toLocaleString());// 14/12/2025, 4:59:49 pm
console.log(myDate.toLocaleTimeString());// 5:00:27 pm

console.log(typeof (myDate));// object

const myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate.toDateString());//Mon Jan 23 2023 / month starts with 0 in js.

// const anotherDate= new Date(2013-04-23);yyyy-mm-dd
const anotherDate= new Date(23-12-2013);//dd-mm-yyyy (India time format)
console.log(anotherDate.toLocaleString());// 23/4/2013, 5:30:00 am

let timeStamp = Date.now();//for time stamp
console.log(timeStamp);// 1765712641932 time in millisecond
console.log(myCreatedDate.getTime());//1674412200000 convert date time in millisecond
console.log(Math.floor(Date.now()/1000)); //used to find time in second 


let newDate= new Date();
console.log(newDate);
console.log(newDate.getMonth());// 11 give month
console.log(newDate.getDay());// 0 means monday

newDate.toLocaleString('default', {
    weekday: "long"
})
