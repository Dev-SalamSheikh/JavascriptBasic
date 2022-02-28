// constructor is Almost Same as Factory Pattern but There is Something Differnt
// We Dont Have to Return the Function as Well
// We Have to make sure that the first Letter of Variables Name Must Be On Capital Letter as Literal
// We Dont Need the ',' and ':' to decleared data in to constructor Pattern
// We Have to add '=' to decleared the data instead of ':'
// We also have to Put 'this' Keyword Before all of the object or data out there
// We Cant call the function as like we do on Factory Pattern , We have to Put 'new' keyword before where we are calling the Pattern functions Name 

// Lets See How to Implement the Consturctor Pattern

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

let result = new Factory(20, 20);
result.forEverybody();