//rest parameters

// function myFunc(a,b, ...c){
//     console.log( `a is ${a}` );
//     console.log( `b is ${b}` );
//     console.log( `c is`, c );
//     //console.log( `a is ${d}` );
//}

//myFunc(3,4,5,6,(7),8,9);


//console.log(numbers);
//console.log(Array.isArray(numbers){


 function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }

    return total;
}
    const ans = addAll(4,5,4,2,10);
    console.log(ans);


