// Map Function return a new data or object what we have changed in a previous data, It is like ForEach Method as Well
let arr = [1,2,3]

var subStarct = arr.map(function(value){
    return value - value;
})

console.log(arr)
console.log(subStarct)

// How To Implement a Map Function in Js

function Mymap (arr, cb){
    let newArr = [];
    for(var i = 0; i < arr.length; i++){
        let temp = cb(arr[i], i, arr);
        newArr.push(temp);
    }
    return newArr;
}

var qb = Mymap(arr, function(value){
    return value * value + value;
})
console.log(qb);