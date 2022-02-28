// We Can Share Same Proto To differnt shape or differnet kind of object we are declearing by sharing same prototype with all new objects prototype

// We Have to call a method called 'object.create()' at here we have to pass the targeted prototype what we are want share with other object

// The Chain Will Like This shape => Shape => Square => circle => Object => Same Common Prototype 

function Main (){

}

Main.prototype = {
    common : function(){
        'I am Common function'
    }
}

function Secondary (width){
    this.width = width
}

Secondary.prototype = Object.create(Main.prototype)

var secondary1 = new Secondary(20);
var secondary2 = new Secondary(200);

function thirdly (height){
    this.height = height
}

thirdly.prototype = Object.create(Main.prototype)

var thirdly1 = new thirdly(30);
var thirdly2 = new thirdly(300);

// This is how we can share a common prototypes to anothers prototype which is similar for our work