// Private Property in JavaScript Mean Hide some Properties from user 
// How to hide some data from user in to an object?
// Just Simple Store the targeted data in to a var inside of object , it will not accesible from outside or not for the user but we can get data from the variable for display properly
// After Storing Data in to var we cant call them by this method, it will throw a undefined to us, we have to call directly by the variables name


let Factory00 = function(age, height){
    
    var position = {
        x : 100,
        y : -100
    }
    var every = function(){
    console.log('My age is ' + this.age)
    console.log('My height is ' + this.height)
    }

    // We Dont Have to Return the Function as Well
    this.age = age
    this.height = height

    this.bio=function(){
    console.log('My X Position is '+ position.x + ' My Y Position is ' + position.y)
    }
    
}

// We Cant Access the 

let result11 = new Factory00(20, 3.3)


