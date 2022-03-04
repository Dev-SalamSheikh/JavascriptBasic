// We Can Declear a function without doint too much thing
// Arrow Function must be stored in a variable

let arrow = () => {
    console.log('I am Arrow Function')
}
arrow();

// If we Have an one line code into our function then we can avoid the function body too
// We also dont need the return infront of out code to return something in outside, cz there is a default return statement 

let arrow2 = (x, y) => x + y;
arrow2(2,10);
console.log(arrow2(2,10))

// If we have to pass only one parameter into our arrow function then we can avoid the parameters branckets as well

let arrow3 = x => x * x;
arrow3(10);
console.log(arrow3(10))