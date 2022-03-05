// What is static method?
// Static is a method where we dont need to call the instance of the object , we can directly access the method by class name called Static Method

// Lets See How to implement the Static Method

class Person {
    constructor(name, email){
        this.name = name
        this.email = email
    }

    print(){
        console.log(this.name, this.email)
    }

    // Now Lets Implement the Static Method
    // We have to add static Keywords before declear the static method
    static create (str){
        let person = JSON.parse(str)
        return new Person(person.name, person.email)
    }
}


let str = '{"name": "Salam Sheikh", "email": "abababab"}'
let output = Person.create(str);
console.log(output);