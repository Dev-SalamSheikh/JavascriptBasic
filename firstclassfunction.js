// 01 - We Can Stored a First Class Function in a Variable
function add(n) {
    return n*n;
}
add()
console.log(add(9))

let total = add;
// Var Total is Global Var Which can be used in any Function as Well   

console.log(total(10));

//  We Can Access the Var From Anywhere


// 02 - A Function Can Be Stored in a Array Too

let array = [];
array.push(total)

console.log(array)
console.log(array[0](10));

// That is how we Can Access a Function From a Array

// 03 - A Function Can Be Stored in a Object Too That is Called FirstClass Function 

let Object = {
    sum : total
}

console.log(Object);
console.log(Object.sum(10));

//  That is how we can access a function from a Object
