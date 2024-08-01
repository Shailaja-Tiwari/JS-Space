// intro to arrays
//reference type
// how to create arrays

//ordered colle. of items..

// let fruits = ["apple" , "mango" , "grapes"];
// let numbers = [1 ,2 ,3, 4];
// let mixed = [2.5 ,5.6, 7.8, 8.0];

// console.log(mixed[0]);

// arrays indexing


// let fruits = ["apple" , "mango" , "grapes"];
// console.log(fruits);
// fruits[1] = "banana";
// console.log(fruits); //arrays = ordered coll. of items.. arrays are mutable.

//arrays = reference type (object)

// let fruits = ["apple" , "mango" , "grapes"];
// let obj = {};
// console.log(typeof fruits);
// console.log(typeof obj);
// console.log(Array.isArray(fruits));
// console.log(Array.isArray(obj));

//push pop array..
//array shift unshift..

let fruits = ["apple" , "mango" , "banana"];
// console.log(fruits);
//push
// fruits.push("grapes");
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// let poppedFruit = fruits.pop();
// console.log(fruits);
// console.log("popped fruits is" , poppedFruit);

// unshift
// fruits.unshift("grapes");
// fruits.unshift("noFruit");
// console.log(fruits);

//shift
let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruits is", removedFruit);