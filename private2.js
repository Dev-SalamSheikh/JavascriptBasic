// How to get access a private data from an object?
// Lets See What we have to do
// We Have to store data targeted data into a another variable with (this.name) then have to declear a function and have to return the targeted data , then we can aceess the data from outside 

// // Lets See One Way
// let Factory00 = function(age, height){
    
//     var position = {
//         x : 100,
//         y : -100
//     }
//     var every = function(){
//     console.log('My age is ' + this.age)
//     console.log('My height is ' + this.height)
//     }

//     this.everyData = function (){
//         return position;
//     };
   
//     // We Dont Have to Return the Function as Well
//     this.age = age
//     this.height = height

//     this.bio=function(){
//     console.log('My X Position is '+ position.x + ' My Y Position is ' + position.y)
//     }
    
// }

// // We Cant Access the 

// let result11 = new Factory00(20, 3.3)
// console.log(result11.everyData())

// Now Lets Go to Another way which is must dificult & More Advanced Level Topic as Well

// Step 1 - Have to define a method which is 'object.defineproperty()'
// Step 2 - There are 3 Parameter or Arguments or object.defineProperty. First one is have to set actually which object's property we are targeting to see from outside , In constructor method we are worikng in 'this' method
// Step 3 - Have to set a Name which is called in outside to access the method
// Step 4 - Have to define a object {}, Inside of the object we have to also define the property as well
// Step 5 - have to define another method which is called get method , in the get method we have to declear a function and the function will return the targeted variable

let Factory01 = function(age, height){
    
    var position = {
        x : 100,
        y : -100
    }
    var every = function(){
    console.log('My age is ' + this.age)
    console.log('My height is ' + this.height)
    }

    Object.defineProperty(this, 'position', {
        get : function(){
            return position;
        },
        // We can also set the value from outside by set method

        set : function(value){
            position = value;
        }
    })
    
    // We Dont Have to Return the Function as Well
    this.age = age
    this.height = height

    this.bio=function(){
    console.log('My X Position is '+ position.x + ' My Y Position is ' + position.y)
    }
    
}

// We Cant Access the 

let result11 = new Factory01(20, 3.3)
result11.position = {
    x : 111,
    y : -111
}
console.log(result11.position)



