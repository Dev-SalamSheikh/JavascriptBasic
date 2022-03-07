// The Problem of Syntax Error or Functional Error in Js which is More dificult to handle with if else statement or method we have to use Try Catch Method to deal with these rype of Problems

// Lets See How We Can Deal a syntax Error With Try Catch Method Of ES6

function textBox (text){
    // Try catch has two parts of Body . One is Try and Another is Catch where the Error is Handling Properly
    try{
        let str = text.trim();
        let word = str.split('  ')

        return word;
    }catch(e){
        console.log('Please input a Valid String Type Data')
    }
}

// let result = textBox(100);
// console.log(result);

// We can Apply this to solve the error of many functional and syntactical 


// If We Have To Do Something Out Of Our Catch Box What is Necessary Then We Can Work With finally Block or Scope
// It will work both situation like the error found or not it will show his value to the user
// Lets See How we can Implement the finally Block

try{
    console.log('Hello')
    throw new Error('Hello, I am Your Custom Throwen Error')
    console.log('Hello')
    console.log('Hello')
}catch(e){
    console.log(e.message)
}finally{
    console.log('Hello, I am Finally Block and i am showing my body at any situation')
}