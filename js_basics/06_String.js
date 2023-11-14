// const name = "Pritam" 
// const repoCount = 22

// // console.log(name + repoCount +"value");   old method of concadination



// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Pritam-G-com') // another way of declearing string

// console.log(gameName[0]);
// console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('5'));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(2,5)
console.log(newString);


const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const newStringOne = "   Pritam   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));


console.log(url.includes('sunder'));

console.log(gameName.split('-'));



