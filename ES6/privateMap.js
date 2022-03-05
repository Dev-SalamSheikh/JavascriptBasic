// We can also private some data with new WeakMap Method
// Lets See how we can do that

const _draw = new WeakMap();
const _width = new WeakMap();
const _resize = new WeakMap();

class shape {
    constructor(width){
    // if we are hidding data with newMap than we have to do some other works as well
    // We have to apply set method ,in the parameter we have to pass the key as the function can access is this value, and the width we want to pass from outside
    _width.set(this, width) 

    // if we want to set another method in to the existing function then we have to do many things 
    // have to declear a variable that can access from the higher order function or inner function
    this.resize = 100;
    // We have to apply the set method here also but there we have to pass a function as well , in the normal function decleartion we cant get the outsides value in to the function thats why we have to pass the arrow function ion to the value of set method
    _resize.set(this, () => {
        console.log(this.size)
    })
    }

    // We can access the value of private and normal data too with get method
    get radius (){
        return _radius.get(this)
    }

    // We can do the same things with the set method to set some value or logic into the objects hidden or normal data
    set logic (v){
        _radius.set(this, v)
    }

    [_draw](){

    }
    
}