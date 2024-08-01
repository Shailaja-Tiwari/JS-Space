//iterables
// jispe hum for of loop laga saken
// sring , array, iterable


// const firstName = "shailaja"

// for(let char of firstName){
//     console.log(char);
// }  //objects are not iterable...

// array like object
// jinke paas length property hoti hai...
// jiske index ko access kr sakte hai...

//  console.log(firstName.length);
//  console.log(firstName[2]);


//sets 
// stores data
// sets alos have its own methods
// order is not guaranteed
//unique items only (no duplicate allowed)


// const numbers = ([1, 2, 3, 4]);
// console.log(numbers);

const items = ['item1' , 'item2' , 'item3' , 'item4'];
const numbers = new Set();

numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(7);
numbers.add(8);
numbers.add(items);
//numbers.add(['item1', 'item2', 'item3']);

// if(numbers.has(1)){
//     console.log("1 is present")
// }else{
//     console.log("1 is not present")
// }
// console.log(numbers);
// for(let number of numbers){
//     console.log(number);
// }

const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
let length = 0;
for(let element of uniqueElements){
    length++;
}

console.log(length);