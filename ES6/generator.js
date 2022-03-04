// What is Generator?
// Generator is a function which returns the iterator function

// How to implement Generator?
// We have to add a (*) after the function keyword
// Then we can add for loop or while loop 
// We have to add yeild method for pause

let arr = [1,2,3,4,5]

// We can store the generator system in to an obejct

let obj = {
    start : 1,
    end : 5,

    [Symbol.iterator] : function * (){
        let currentValue = this.start
        while(currentValue <=  this.end){
            yield currentValue++;
        }
    }
}

let iterator = obj[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

// We Can Simple Make the Generator Function with for loop

function* iteratorfunction (collection) {
    for (let i = 0; i < collection.length; i++) {
       yield collection[i]
    }
}

let it = iteratorfunction(arr);
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

// as simple What returns the iterator functiop from an object or array or any method that is called generator method or function