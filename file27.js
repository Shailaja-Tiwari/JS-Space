// objects inside array...
// very very useful in real world applications...

const users = [
   {userId: 1, firstName: 'shailaja' , gender: 'female'},
   {userTd: 2, firstName: 'shivani' , gender: 'female'},
   {userId: 3, firstName: 'devyani' , gender: 'female'}
// ]
// console.log(users);
    

// for(let user of users){
//    console.log(user.firstName);
// }


//nested destructuring...
const [{firstName: user1firstName, userId},  , {gender: user3gender}] = users;

console.log(user1firstName);
console.log(userId);
console.log(user3gender);