// Find Function is valid if we are searching for a specific data form and largest data or object
// FindIndex Function Will Help Us to see the index number of the data what we are searching for!

// The Stracture Of FindFunction

let arr = [1,2,3,4,5,6,7,8,9,10]
let newArr = arr.find(function(value){
    return value === 9;
})

console.log(newArr);

// The Stracture Of FindIndex Function

let index = arr.findIndex(function(value){
    return value === 9;
})
console.log(index);


// The Impletation Of find Function

function myFind (arr, cb){
    for( let i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            return arr[i];
        }
    }
}

let find = myFind(arr, function(value){
    return value === 9;
})

console.log(find);

// The Impletation Of FindIndex function

function findIndex (arr, cb){
    for(let i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            return i;
        }
    }
}

let Indexfind = findIndex(arr, function(value){
    return value === 8;
})
console.log(Indexfind);