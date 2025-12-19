
const myNums=[1,2,3,4,5];
// const myTotals=myNums.reduce(function (accumulator, currentvalue){
//     console.log(accumulator, "and", currentvalue)
//     return accumulator+currentvalue;

// }, 0);

// const myTotals = myNums.reduce((accumulator,currentvalue) => accumulator+currentvalue,0)
// console.log(myTotals)

//another example
const shopingCart = [
    {
        itemName: "js course",
        price: 3000
    },
    {
        itemName: "java",
        price: 5000
    },
    {
        itemName: "python",
        price: 6000
    },
    {
        itemName: "react",
        price: 4000
    },
]
const totalPrice = shopingCart.reduce((accumulator,item)=>accumulator+item.price,0);
console.log(totalPrice)