//lexical scope..
function myApp(){
    const myVar = "value";
    function myFunc(){
        const myVar = "value59";
        const myFunc2 = () =>{
    
        
        console.log("inside myFunc" , myVar);
    }
    myFunc2();    //lexical scpope me doubt hai...
}
    console.log(myVar);
    myFunc();
}

myApp();