// Every Objects has two parts , 1. Inheritance Mean Own Body Of the Objects , 2. Prototypes
// We Can short Our Code by doing Prototypes Add, If we are doing the same in thousand time in code we dont need to copy the same value for every single object, we can simple push in to prototypes and it will applicable for all object that we are copying
// We also rewrite or overwrite the value of existing prototype 


function square (width){
    this.width = width;

}

// Now we are pushing the draw function in to the prototyepe for that it will not repeat again , we dont have to copy with multiply time as well
// What we are doing in that proto function it will return the value how many times we are copying the parent object called square

// We Can also rewrite the setting of an existing prototypes in same object, We can set it what we are want to do with this method

square.prototype = {
    draw : function(){
        console.log('Hello JS')
    },

    toString : function(){
        console.log('Hello JavaScript')
    },

    //We Can Get Easily Access From the Inheritance Part Means That The Own Body Object's any proprty or value and also can show it on where we are want to  

    valueOf : function(){
        console.log('My Value is + ' + this.width)
    }
}

var sqr1 = new square(20)
var sqr2 = new square(200)
var sqr3 = new square(2000)
var sqr4 = new square(20000)
