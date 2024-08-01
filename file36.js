// callback function...

// function myFunc(a){
//     console.log(a);
//     console.log("hello world");
// }

//myFunc("shaallyy");

 
function myFunc2(name){
    console.log("inside my func 2")
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    // sql query
   // const data = {}
    console.log("hello you can and you will..")
    callback("harshit");
}

myFunc(myFunc2);