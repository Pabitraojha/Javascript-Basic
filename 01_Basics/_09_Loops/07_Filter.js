//aslo filter take callbacks 
const myNums =[1,2,3,4,5,6,7,8,9,10];

// const newNums=myNums.filter((num)=> num> 5)
// console.log(newNums)

// const newNums=myNums.filter((num)=> {
//     return num> 5; //for curly braces return is most
// } )
// console.log(newNums);

const bookName=[
    {title: "book1", genre: "fiction", publish: 1984, edition: 2000},
    {title: "book2", genre: "non-fiction", publish: 1990, edition: 2004},,
    {title: "book3", genre: "history", publish: 1984, edition: 2008},
    {title: "book4", genre: "Science", publish: 2000, edition: 2025}
];
let result=bookName.filter((books)=> books.publish>1990);
// console.log(result);
result= bookName.filter((books)=> books.genre=== "fiction");
// console.log(result);
result=bookName.filter((bk)=>{
  return  bk.publish===1984 && bk.genre ==="history" ;
});
console.log(result);
