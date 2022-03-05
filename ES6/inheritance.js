// We can simple inheritance in ES6
// Lets See how We can do this

class shape {
    draw(){
        console.log('drawing....')
    }
    color(){
        console.log('coloring..')
    }
}

// now if we want to get the shapes method into our rect then we have to do some things
// We just have to call extend method and have to put the name which method we want to be copied
class rectangle extends shape{
    constructor(width, height){
        // cz, we are using constructor we have to call the shapes method by 'super' method
        super()
        this.width = width
        this.height = height
    }

    // Wd can alsos override the parents method easily just calling the methods name and have to change the value

    color(){
        console.log('overrided');
    }

    calculate(){
        return this.width * this.height
    }
}

let rect = new rectangle(10,20)
console.log(rect.color())