// In custom Build Objects Prototype we have to code much more than the class function which is comes with the ES6
// Lets See How We can create the Clas function instead of Custom Iterable Objects

class Rectangle {
    // We have to call constructor cz have to set what the function will do?

    constructor(width, height){
        this.width = width
        this.height = height
    }

    // Now We can Simple add the Prototypes for the Function
    // No need to add the function name for proto, we can directly add the name and do what we want to do

    draw (){
        console.log('drawing...')
    }
}

// We can Store The function as simple we can do like Custom Iterable Object
let rect1 = new Rectangle(10, 20)
console.log(rect1)