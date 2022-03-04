// In ES6 We Can Show a string in a easy way with a `` Backkick,
// We have to put the variable into ${}, we can also apply the logic into it as well . 

let name = 'Salam Sheikh'
let age = 16

console.log(`My Name is ${name} and i'm ${age} years old. I am ${age < 18 ? 'not adult' : 'adult' }`)

// We Can fill up our array to an sepcific number of length using padStart and padEnd Method, in padEnd method we can also declear exaclty what we are looking for fill

console.log(name.padStart(15));
console.log(name.padEnd(15, 'a'));

// We Can Repeat some string as long we want

console.log('S'.repeat(50));
