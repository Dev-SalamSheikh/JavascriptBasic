// // What is Property Descriptor?
// // We Can Check a Objects proper fundamentals using Descriptor
// // Lets See How We Can check an objects decriptor?

// let hello = {
//     name : "Salam"
// }

// // We Have to store the Descriptor into another variable
// // We Have to Call 'Object.getOwnPropertyDescriptor' Method
// // The First Parameter is which objects descriptor we want to see
// // The Second Parameter is exactlt which peroperties description we want to see in an object
// // Then We Can simply console log the variable

// let check = Object.getOwnPropertyDescriptor(hello, 'name');
// console.log(check);

// // How To get an objects prototypes and his descriptor also

// // We Can simply get the prototypes of an object by storing in to a variable and call a method which is 'Object.getPrototypeOf() -> Parameter is which objects prototype we want to see'

// let objproto = Object.getPrototypeOf(hello);
// let descriptor = Object.getOwnPropertyDescriptor(objproto, 'name');
// console.log(descriptor);

// // We Can ALso Change The Value Or Set The Value Of Property Descriptor by duing changing some value

// // We Have to call 'Object.defineProperty()' Method and have to pass 3 parameters , first one is which objects we want to change descriptor , second one is specific which objects properties descriptor we want to change , third one is have to pass an object and inside the object we have to change the default value change !

// // Lets See How to implement the changes

// Object.defineProperty(hello, 'name', {
//     value : 'Salam Sheikh',
//     writable : false,
//     enumerable : false,
//     configurable : false
// })

// console.log(hello);


// We Can Change or add some common things in ptototypes

function Fuckiuu (name){
    this.name = name
}
Fuckiuu.prototype.PI = 3.09876;

let check = new Fuckiuu('Salam');


console.log(Object.getPrototypeOf(Fuckiuu))
console.log(Object.getPrototypeOf(check))