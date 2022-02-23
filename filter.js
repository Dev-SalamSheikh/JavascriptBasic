// Filter Means Filtering the Data What we want to implement on the new Array With Some Condition of mine !
// The Basic Stracture is Like This 

var arr = [1,2,3,4,5,6,7,8,9,10]

var newArr = arr.filter(function(value){
    return value > 8
})

console.log(newArr);

// Lets See How it Actually Works & HOw Can We Implement The Filter FUnction

function myFilter (arr , cbF){
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if(cbF(arr[i], i, arr)){
            array.push(arr[i])
        }
    }
    return array;
}

console.log(myFilter(arr, function(value){
    return value % 2 === 1;
}));
console.log(myFilter(arr, function(value){
    return value < 4;
}));