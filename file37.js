// function returning function

function myFunc(){
    function hello(){
        console.log("hello world")
    }
    return hello;
}

const ans = myFunc();
console.log(ans);
//ans();   // fuc returning func..

console.log(ans());