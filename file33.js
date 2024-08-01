// block scpoe vs function scope

// let and const are block scope
// var is function scope

// {
//     let firstName = "shailaja";
//  console.log(firstName); 
//     } 
    
//     //agar kisi block me let , const use kiya hai toh aap use sirf usi block me access ke sakte ho..

//  {
//     var firstName = "shally";
//  }
//      console.log(firstName);    


// default parameters

function addTwo(a,b=0){
    return a+b;
}

// const ans = addTwo(4,5);
// console.log(ans);

const  ans = addTwo(4, 8);
console.log(ans);