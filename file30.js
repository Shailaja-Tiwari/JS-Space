// hoisting

// hello();
//  function hello(){
//     console.log("hello world");
//  }




// //aap functoion expression me aisa nhi kar sakte...
// const hello = function(){
//    console.log("hello world");
// }


// let hello = function(){
//     console.log("hello world0");
//  }
 


//  console.log(hello);
//  var hello = "hello world"
//  console.log("hello");       // let aur const ke case me bhi aisa hi hoga...



// Hoisting in JavaScript refers to the behavior where variable and function 
// declarations are moved to the top of their containing scope during the 
// compilation phase, before the code is actually executed. This means that
//  you can use a variable or call a function even before it's declared in the code.
 
 myWorld();
 function myWorld(){
   console.log("who is your buddy");
 } 