// splice method
// start, delete , insert

const myArray = ['item' , 'item2', 'item3', 'item5' , 'item6' ];

//delete
//console deletedItem= myArray.splice(1, 1);
//console.log("deleted item" , deletedItem);


//insert
//myArray.splice(1, 0, 'inserted item');    



// insert and delete
const deleteditem = myArray.splice(1, 2, "inserted item", "it" );


console.log("deleteditem" , deleteditem);

console.log(myArray);
