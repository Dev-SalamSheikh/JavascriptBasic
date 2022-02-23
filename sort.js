// Array sorting is mainly do for maintain their order ans shown as serially ! it can be happen by decending and acending method both

let arr = [0,1,2,3,4,5,6,7,8,9]

arr.sort(function(a, b){
    if(a > b){
        return 1;
    }else if(a < b){
        return -1;
    } else {
        return 0;
    }
})

console.log(arr);

// Lets See How To Sort an Object Array in Acending Order or Decending Order As Well

let person = [
    {
        name : 'salam',
        age : 20,
        job : 'facebook engineer'
    },
    {
        name : 'fiayaz',
        age : 18,
        job : 'facebook developer'
    },
    {
        name : 'ashik',
        age : 25,
        job : 'facebook bugHunter'
    }
]

// The Method is here

person.sort(function(a, b){
    if(a.age > b.age){
        return 1;
    }else if(a.age < b.age){
        return -1;
    }else{
        return 0;
    }
})

console.log(person);


// The every Method Fucntion return the true value if his all the value or condition matched properly ! if just one value is not similar to giver condition then it will thorow a negetive value to us !

let myArr = arr.every(function(value){
    return value % 2 === 0; 
})

console.log(myArr);

let smaller = arr.every(function(value){
    return value >= 0;
})
console.log(smaller);


//  The Some Function Method Do The Different Things as Every Function Method ! it will give us true as return if their is a minimum negetive value or what is matched to the condition we have passed

let res = arr.some(function(value){
    return value % 2 === 0;
})
console.log(res);