// difference between dot and bracket notation...


const key = "email";
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping" , "listening"]

}

//console.log(person["person hobbies"]);  // string use krenge tab bracket use hoga..

// person[key] = "imshelly61003@gmail.com";
// console.log(person);


// for in loop
// object.keys

//for(let key in person){
   // console.log(key);
    // for key elements
    //console.log(person[key]);
    // for key points and elements both...
    //console.log(`${key} : ${person[key]}`);
//}

//object.keys
/
// method to check array...

const val = Array.isArray((Object.keys(person)));
console.log(val);

