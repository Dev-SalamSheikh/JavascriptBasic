// if we have to treverse in an array or objects with a pause system then we can simply use iterator
// we can pause the operation when we want to pasue

// Lets see how we can create a iterator Function

// Step 0 - Have to Create a Function
// Step 1 - We have to add a index selector with variable 
// Step 2 - Have to Pass Targeted object/method as parameter of the function
// Step 3 - Main Function Should Return an Object
// Step 4 - The Returned Object have to carry or define e method as well
// Step 5 - The Upper Method also have to return an object
// Step 6 - We have to apply some logic ionto the returned object or the upper method
// Step 7 - done method : we have to apply the logic like if the targeted objects length is less then the index selector then the process has been end and it will return an undefined value
// Step 8 - Value Method : It will show the index of the targeted objects index
// Step 9 - we have to store the function in to a variable to pass our array or object

let arr = [1,2,3,4,5]

function myIterate (target){
    let i = 0;
    return{
        next(){
            return{
                done : i >= target.length,
                value : target[i++]
            }
        }
    }
}

// let result = myIterate(arr);
// console.log(result.next())

// in ES6 We have to defaullt Method to iterarte our object
// That is called Symbol.iterator
// Lets See How we can use the method

let arr2 = [1,2,3,4]
let iterrating = arr2[Symbol.iterator]();

// console.log(iterrating.next());



// How we can make a object as an iterable object?

// We have to Create an objects variable which name is [Symbol.iterator] : and it will be a function
// Have to declear a current value with var
// the function will return an object
// Have to store the objects targeted value into a variable called self
// in the object there will be a method called next
// The Next steps will like the iterrator generator function


let obj = {
    start : 1,
    end : 7,
    [Symbol.iterator] : function(){
        let currentValue = this.start
        const self = this
        return{
            next(){
                return{
                    done : currentValue >= self.end,
                    value : currentValue >= self.end ? undefined : currentValue ++
                }
            }
        }
    }
}


let iterate = obj[Symbol.iterator]()
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
