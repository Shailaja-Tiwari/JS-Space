// reduce..

// const numbers = [1,2,3,4,5,];

// // aim: sum of all the numbers in array..;

// const sum = number.reduce((accumulator, currentValue))
//   return accumulator + currentValue;



// accumulator ,  currentValue,  return
// 1                 2            3
//3                  3            6
//6                  4            10
//10                 5            15
//15                 10           25


const userCart = [
{productID: 1, productName: "mobile", price: 12000},
{productID: 2, productName: "laptop", price: 22000},
{productID: 3, productName: "tablet", price: 32000},
{productID: 4, productName: "tv", price: 11000},
]

totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
  return totalPrice + currentProduct.price;
}, 0)
console.log(totalAmount);



//total price       current value         return
// 0                    {}                  12000
// 12000                22000               34000
//34000                 15000               49000
//49000                 11000               60000  