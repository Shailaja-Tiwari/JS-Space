// sort method..
// 5,9,1200,1400,3000


// const numbers = [5, 9, 1200, 3000];
// numbers.sort();

// console.log(numbers);   //ASCII Values... 



// const numbers = [5, 9, 1200, 3000];
// numbers.sort(a,b)=>{
// return a-b;
// });

// numbers.sort((a,b)=>a-b;
// console.log(numbers);   //ASCII Values... 

//1200,410
//a-b -----> 790
//a-b ----> positive (greater than 0) ----b, a
//410 , 1200

//a-b ----> negative ----->a,b
//5, 9 ----> -4

//asecding a-b;
//desending b-a;

//price  lowToHigh  HighToLow
const products = [
    {productId: 1, productName:"p1", price: 300},
    {productId: 2, productName:"p2", price: 300},
    {productId: 3, productName:"p3", price: 200},
    {productId: 4, productName:"p4", price: 8000},
    {productId: 5, productName:"p5", price: 500},
]
//LowTOhigh
    products.sort((a,b)=>{
        return a.price-b.price
    });
       
    console.log(products);

