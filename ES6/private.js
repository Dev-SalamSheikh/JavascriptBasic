// If we want to hide some data from an user what should we do?
// Lets See

// We can Name the Method in a object by [_] underscore, it is accessible too
// We Can store the targetd data in to a variable with symbol() method, it will magically hide our data from the object

const _radius = Symbol();
const _draw = Symbol();
const _common = Symbol();

class circle {
    constructor(radius){
        this.radius = radius;
    }

    common(){
        console.log('common function Method')
    }

    // We can name the function method like this way

    [_draw](){
        console.log('drawing....')
    }
}

let c1 = new circle(2)
console.log(c1.common())

