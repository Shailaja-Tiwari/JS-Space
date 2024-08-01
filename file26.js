// object destructuring

const band = {
    bandName: "sanam puri",
    famousSong: "mere mehboob kayamat hogi",
    year: 2005,
    anotherFamosSong: "kashmir"
};

//const {bandName, famousSong} = band;


//console.log(bandName , famousSong , );

let{ bandName , famousSong, ...restProps } = band;
console.log(bandName);
console.log(restProps);