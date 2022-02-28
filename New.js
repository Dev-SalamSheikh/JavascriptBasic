// my custom new keyword
// conditions 
// create a new empty object
// Define its prototype
// suppose it's haven't only one argument. It can be multiple arguments but 1st one is always the function constructor which is index number 0
// In a function it's not have any argument method. But we need it. In a array it's have the arguments method. Now we want to apply it with our custom new keyword. So that we slice the method from array and assign it into a variable. Now we are in a function but we have the access of array's arguments method 
// Now our next target is to connect the variable with the empty object of the constructor. So that the empty object have the access of multiple arguments.
// But the condition is we want to add multiple arguments from index number 1. Because 1st argument always is the constructor.
// Finally we return the obj.

let Factory = function(age, height){
    // We Dont Have to Return the Function as Well
    this.age = age
    this.height = height

    this.bio=function(){
    console.log('nothing here')
    }
    
    this.forEverybody = function(){
    console.log('My age is ' + this.age)
    console.log('My height is ' + this.height)
    }
    
}

// Lete See How we Can Call the Constructor Pattern

// let result = new Factory(20, 20);
// result.forEverybody();


function myNew(constructor){
    let obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    let argsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argsArray.slice(1))

    return obj;
}

let result = myNew(Factory, 20, 5.5)
result.forEverybody();