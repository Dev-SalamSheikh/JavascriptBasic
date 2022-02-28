// What is Object Oriented Programming?
// OOP is a programming Paradime!

// How We Can Thinks EveryThing as a Object?
// Everything which takes multiply properties to describe is an object as well.
// An integer Number Can be also an object Like 450.0000 [There is a integer part, floating part, negetive part, popsitive part, string value has been included. Thats why we can think a number as an object]

// Class is Just a template in OOP or Modern JS

// How to declear an function in a object

let hello = {
    age : 20,
    height : 4.4,

    // Now lets see how we can define a function

    bio:function(){
    console.log('nothing here')
    },

    forEverybody : function(){
        console.log('My age is ' + this.age)
        console.log('My height is ' + this.height)
    }
}

// Now Lets See How Can we Call the Function Outside of the Object

hello.bio();

// We Can Also Change the Value by Calling the object property directly by call the function after

hello.age = 45;
hello.height = 4.5;
hello.bio()

// Lets create another object and try to bind upper functions data into it by this method

let bye = {
    age : 100,
    height : 6.2,

    biodata : function(){
        console.log('I am Comment Outed')
    },

    letsSea : hello.forEverybody
}

bye.letsSea();



// We Can Also Bind This Method in a function as well

function testing (){
    bye.letsSea();
}

testing();

// Accessing the objects data in a direct function we have to put () brackets after the data we want from object, like how we call a function as well!