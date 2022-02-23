// We Can Treverse a Array By ForEach Method 

let arr = [1,2,3,4,5]

function forEach ( arr , cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr)
    }
}

var sum = 0;

forEach(arr, function(value, index, arr){
    console.log(value, index, arr)
    sum += value;
})
console.log(sum);

// That is How we can do more things with the ForEach We Have Been Just Created

forEach(arr, function(value, index, arr){
    arr[index] = value + 5
})

console.log(arr);