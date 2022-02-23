// Reduce Function Means Get The Initial Value What we are searching for from a large size of database! its look Like Filer Function But is has a different data stracture & have some more parameters that is called "current value => curr" , "previous value => prev"
// Lets see how actually it works 

let arr = [20,1,2,3,4,5, 10, 10, 15]
let newArr = arr.reduce(function(prev, curr){
    return prev + curr;
}, 5)

let newArr2 = arr.reduce(function(prev, current){
    return prev - current;
}, 100)

console.log(newArr2)
console.log(newArr);

// Lets See How To Implement The Reduce Function in JS

function myReduce(arr, cbF, accu){
    for(let i = 0; i < arr.length; i++){
        accu = cbF(accu, arr[i])
    }
    return accu;
}

let sum = myReduce(arr, function(prev, curr){
    return prev + curr;
}, 0)
console.log(sum)

let max = myReduce(arr, function(prev, curr){
    return Math.max(prev , curr);
}, 0)
console.log(max);

let min = myReduce(arr, function(prev, current){
    return Math.min(prev, current)
}, arr[0]);
console.log(min);