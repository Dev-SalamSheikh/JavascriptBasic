// In Call Back We Can Pass a function as arguments , its doesn't matter the passed function is defined or not , we can create a annonymous function when we want to call the main function

function summary (a, b, cb){
    let c = a + b;
    let d = a - b;
    let result = cb(c, d)
    return result;
}

// We Can also pass a already defined function as a parameter on main function

function sum (a, b){
    return a + b;
}

var mainResult = summary(4, 5, sum);
console.log(mainResult);

// We Can Create a Annonymous Function as a call back function
var mainResult = summary(4, 5, function(c, d){
    return c - d;
})
console.log(mainResult);