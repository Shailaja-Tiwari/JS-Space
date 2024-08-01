// let num1 = 6;
// let num2 = num1;
// console.log("value is num1 is", num1);
// onsole.log("value is num2 is", num2);
// num1++;

// console.log("after incrementing mum1");
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);


//reference types
//array
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1" , array1);
console.log("array2" , array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array2", array2);




//primitive type
let age = 30; 
let age1 = age; // Pointing to age 

console.log(`age = ${age} age1 = ${age1}`); 

age = 31; // Pointing to new address 

console.log(`age = ${age} age1 = ${age1}`);



//reference type
let info = { 
	Name :"Abc", 
	Age :10 
} 
console.log(`Name : ${info.Name} Age : ${info.Age}`); 

let info1 = info; 
info1.Age = 14; // Change the Age of original object 
console.log(`Name : ${info.Name} Age : ${info.Age}`);
