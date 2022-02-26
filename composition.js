// Function Composition Means Passing a functions output as a functions input like arguments 
// Lets see how to implement the composition function as a simple way

function show (input){
    console.log(input);
}

function substrack (n){
    return n - 1
}

function add (a, b){
    return a + b
}

// Now Passing a functions result as a anothers arguments

let result = show(substrack(add(10, 10)));
// console.log(result);