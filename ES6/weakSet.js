// WeakSet is also an collection like set but the connection and relation between object's and the collections is weak
// if we want to remove some data from an collections like set we cant do it but in weakSet we can remove or null the whole data easily

// sweakSet is not an iterable Object
// We can only store the objects into the weakSet
// we can store the set method's data into an array by doing
// let arr = [...set] => it will store data set's collections Data

let a = {a: 10}, b = { b: 20 }
let weakset = new WeakSet([a, b])
a = null;
console.log(weak)