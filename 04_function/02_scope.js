let a=10;
const b=20;
var c=30;// not in use. can be redeclare and can be accessed as a global variable all time

console.log(a);
console.log(b);
console.log(c);

//{} - Scope
//block Scope : variablevinside any block or function.
//global scope : variable outside of any block or function.

function one(){
    const username = "Ojha";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    //console.log(website);==thowing error
    two();//function call two
}
one();//function call one