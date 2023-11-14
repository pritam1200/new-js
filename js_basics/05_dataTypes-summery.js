// Premitive

// 7 types : String, Number, Bolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn =false
const outsideTemp = null
let userEmail; // or let outsideTemp = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 846513213484654865136846513n //this is bigInt

// Reference (Non primitive)

// Array, Objects, Functions

const hero = ["Pritam", "Swapna", "Sreeja"];
let myObj={
    name: "Pritam",
    age: 22,
}

const myFunction= function(){
    console.log("Hello owrld");

}
console.log(typeof myObj);