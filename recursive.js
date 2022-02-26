// The Recursive function is one of the important function method over there! There is lots of logic implemented here!

// Lets see howw we can suammation a number by recursive function

// function sum (n){
//     if(sum === 1){
//         return 1;
//     }
//     return n + sum(n-1);
// }
// console.log(sum(5))

// Lets see how to treverse a array by Recursive Function

let arr = [1,2,3,4,5,6,7,8,9,10]

function sumOfArray (arr, lastIndex){
    if (lastIndex < 0){
        return 0
    }
    return arr[lastIndex] + sumOfArray(arr, lastIndex - 1);
}

console.log(sumOfArray(arr, arr.length - 1));