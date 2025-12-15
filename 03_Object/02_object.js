// Object declaration by singleton
const tinderUser= new Object();
console.log(tinderUser);
tinderUser.Id = "23A";
tinderUser.name="Ojha";
tinderUser.isLoggedIn = "No";

const newUser={
    email: "sdfl@gmail.com",
    fullName: {
        userFullName: {
            firstname: "pabitra",
            lastname: "ojha"
        }
    }
}
console.log(newUser.fullName.userFullName.firstname);


// merging two objects
const obj1={1: "a",2: "b"};
const obj2={3: "c",4: "d"};
const obj3={5: "e",6: "f"};
//1st method
const obj4=  Object.assign({},obj1,obj2);
console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//2nd method
const obj5={...obj1,...obj2};//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }   
console.log(obj5);


const users=[
    {
        id: 1,
        email: "safdgdgdf@gam"
    },
    {
        id: 2,
        email: "saf@gam"
    },   
]

console.log(users[0].email); // here users is an array so here 1 represents the 1st element of array
console.log(tinderUser);

console.log(Object.keys(tinderUser));// to find all keys of an object
console.log(Object.values(tinderUser));// used to find all the value of an object
console.log(Object.entries(tinderUser));// used to convert all key values into arrays

console.log(tinderUser.hasOwnProperty("isLoggedIn"));//this return this given property is present in the obejct or not and return value in boolean form.


//object destructure 
const course= {
    courseName: "javascript",
    coursePrice: "1000",
    courseInstructor: "Ojha"
}

const {courseInstructor} = course;
console.log(courseInstructor);
const {courseInstructor: instructor}= course;//destructuring of an object
console.log(instructor);

// API basics
/* API stands for application programming interface.
-> API allows our program to communicate with other software, services, or browser features.
*/

// JSON - stands for javascript object notation.
//syntx-
// {
//   "id": 101,
//   "name": "Laptop",
//   "price": 55000,
//   "inStock": true
// }


