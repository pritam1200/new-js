// console.log("2"> 1);
// console.log("02"> 1);

console.log(null >0);
console.log(null ==0);
console.log(null >=0);

console.log(undefined ==0);
console.log(undefined >0);
console.log(undefined <0);

//WE SHOULD ALWAYS AVOID THIS TYPE OF COMPARISON

/* The reason is that an equal check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
Tht's why (3) null >=0 is true and (1) null>0*is false */

// === 

console.log("2"===2); // <-- strict check