// string is a sequence of character used to represent text.
/* we can write a string in 
                        1) single  quote
                        2) Double quote
                        3) Backtik

    Tempelate literals: A way to have embeded expressions in String. Written in a backtik.

    String Interpolation: To create a string by substitution of placeholder.

    Escape Characters: 
                        1)/n -new line
                        2) /t -for tab

    String Properties:
            1) stringName.length; to find the length of the string
            2)String indices: stringName[indexNumber]
    
    String method in js:
            1)toUpperCase(): to convert to uppercase
            2)toLowerCase(): to convert to lowercase
            3)charAt(index): to check the char at the index
            4)indexof(value): to check the index value of a char
            5)includes(value): check the string contains a value
            6)startWith(value): check the string start with the value
            7)endsWith(value): check the string ends with a value.
            8)slice(start, end): Extracts part of a string.
            9)substring(start,end): Extracts character in between two strings.
            10)replace(old,new): replace a value in a string.
            11)replaceAll(old,new): replace all occurance of a value.
            12)split(separator): Splits string into an array
            13)trim(): remove white spaces from both end.
            14)trimStart(): remove white spaces from start.
            15) trimEnd(): remove white spaces from end.
            16)concat(): joint two or more string. 
            17)repeat(count): Repeats string specified number of times. 
            18)localeCompare(string): compare two strings.
    */
const name = "Pabitra";//string declaration
const myName= new String('pabitra');// another way to declare a string . here new is a keyword.
const age = 22;
console.log(`my name is ${name} and my age is =${age}`);//string interpolation

console.log(name.length); // number of character in string

console.log(name[3]);// to find the character present in this index

console.log(name.toUpperCase());//to convert UpperCase

console.log(name.toLowerCase());// to convert LowerCase

console.log(name.charAt(3));//char at index 3

console.log(name.indexOf('r'));//find the index of the char

console.log(name.includes('tra')); //check -tra- present in the string

console.log(name.startsWith("Pab")); //check string start with -pab- or not
console.log(name.endsWith('ra')); //check string ends with -ra- or not

//string slice
const anotherString= name.slice(-7,6);// slice can contains negative value 
console.log(anotherString);

//string substring
const newString= name.substring(0,4);
console.log(newString);//but substring can't contaion negative value

//replace
let str= "i love java";
console.log(str.replace("java", "javascript"));

//replaceAll
let str1= "red blue red yellow";
console.log(str1.replaceAll("red","green"));

//split
let str2= "HTML CSS JS";
console.log(str2.split(" "));

//trim
let str3= "  hello   ";
console.log(str3.trim());


//trimstart
console.log(str3.trimStart());

//trimend
console.log(str3.trimEnd());

//concat
let string1="Hello";
let string2="pabitra";
console.log(string1.concat(string2));
console.log(string1.concat(" ",string2));

//repeat
let str4= "hi  ";
console.log(str4.repeat(5));

//search
let a= "i love javascript";
console.log(a.search("java"));// search value at index

//match
let str6="avba23324";
console.log(str6.match(/[0-9]/)) //is used ot find a pattern (like numbers, letters, words) inside a string.

//localCompare






