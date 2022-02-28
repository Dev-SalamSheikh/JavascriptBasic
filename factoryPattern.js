// Factory Pattern Means a Function Which Can Return His Own Data Multiply Times
// It is Like a Templates Also
// We Can Avoid Copy Paste a Object Multiply time by Factory Pattern
// Lets See How we Can Implement Factory Pattern in Basic Way by Copyring the ObjectOriented Function
// We have just decleared a new function by name & return the value we want to return multiply time like below

let factory = function(age, height){
    return {
        age : age,
        height : height,
    
        // Now lets see how we can define a function
    
        bio : function(){
        console.log('nothing here')
        },
    
        forEverybody : function(){
            console.log('My age is ' + this.age)
            console.log('My height is ' + this.height)
        }
    }
}

// Lets See How We can Use the Functions Multiple Time

let test1 = factory(100, 100); 
// Storeed the function in a Var Sucessfully and we have to pass the arguments as well
test1.forEverybody();
// That is how we can see what data we want to display

// Now we can store the function multiply time and we dont have to repeat the same code multiply time as well 
// That is a example of Factory Pattern in OOP!