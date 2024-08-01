//FUNCTIONS...
// function declaration...
// function singHappyBirthday(){
//     console.log("happy birthday to you...");
// }

// singHappyBirthday();

// function twoPlusFour(){
//    return 2+4;
// }

//dry = dont repeat yourself...

// const returnedValue = twoPlusFour();
// console.log(returnedValue);

// function sumwoNumbers(number1 , number2){
//     return number1 + number2;

// }

// const returnValue = sumTwoNumber();                             //function expression 
// console.log(returnValue);                                        const sumThreeNumbers = function(number1 , number2 , number3);
// console.log(undefined + undefined);                               return number1 + number2 + number3;

// function sumThreeNumber(number1 , number2 , number3){
//     return number1 + number2 + number3;
// }

// const returnValue = sumThreeNumber();
// console.log(returnValue);


// isEven
// input : 1 number
// output : true , false

// function isEven(number){
//     if(number % 2 === 0){
//         return true;
//     }
//         return false;
    
// }

// console.log(isEven(8));


//function
//input : string
// // output: firstCharacter

// function firstChar(anyString){
//       return anyString[0];
// }

// console.log(firstChar("zbc"));
    

function findTarget(array , target){
    for(let i=0; i<=array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}

const myArray = [1,2,4,90,8]
const ans = findTarget(myArray , 6);
console.log(ans);


// function expression...
 const singHappyBirthday = function(){
    console.log("happy birthda to you ...");
 }