//every method..

// const numbers = [2,4,6,9,10];


// function isEven(numbber){
//     return number % 2 === 0;
// }

//const ans = numbers.every((number)=>number%2===0);

//callback function ---> true / false (boolean)

//every method --->  true / false (boolean)

// console.log(ans);


//price  lowToHigh  HighToLow
const userCart = [
    {productId: 1, productName:"p1", price: 300},
    {productId: 2, productName:"p2", price: 300},
    {productId: 3, productName:"p3", price: 200},
    {productId: 4, productName:"p4", price: 8000},
    {productId: 5, productName:"p5", price: 500},
]


const ans = usercart.every((cartItem)=>cartItem.price  < 3000 );
console.log(ans);