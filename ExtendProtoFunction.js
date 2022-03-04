// If We are doing something what we noticed that is duplicating again and again then simple we can call a fucntion that will reduce our code ! We Can do this also to prototypes decleartion

// We Can do this to set prototype of an object ! We have to call a function and have to set two parameter to declear parent and child function where we want to set prototype


function extendProto (parent, child){
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child;
}



function Main (hello){
    this.hello = hello
}

Main.prototype = {
    common : function(){
        'I am Common function'
    }
}

function Secondary (width, color){
    Main.call(this, color)
    this.width = width
}

extendProto(Main, Secondary);

var secondary1 = new Secondary(20, 'red');
var secondary2 = new Secondary(200, 'green');

function Thirdly (height, hello){
    Main.call(this, hello)
    this.height = height
}

extendProto(Main, Thirdly)

// We Can Change The Default Behaviour Of an function inside of our targeted object as well!  we have to declear exactly what prototypes function we want to rewrite or override and have to do the functionality , it will aplicable only for the targeted object

Thirdly.prototype.common = function(){
    Main.prototype.common.call(this);
    console.log('I have Changed My Functionality');
}

var Thirdly1 = new Thirdly(30);
var Thirdly2 = new Thirdly(300);