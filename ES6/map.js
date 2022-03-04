// Map is also a data structure like set collection

// Maps data can be duplicated
// in map we have to pass data in two type , one is keys , another one is value
// The keys can be anything like array, object, string
// There is also some method like set.
// if we want to add some new data in the map collection we have to apply the method name map.set() => and here also have to pass two types of data => keys and values
// Map.get() we can pass the keys into the method and it will return the value for us
// Map and set both are iterable function
// We can play with the for of loops and also with the for Each Loop Method


let map = new Map([
    ['a', 30],
    ['b', 40],
    ['c', 50],
    ['d', 60],
    ['e', 70],
])

// Lets See to to pass value form outside
map.set('f', 100)

console.log(map)

// Lets see how we can test the for of loops and forEach Loops

for(let[k, v] of map){
    console.log(k,v)
}

// ForEach Loop

map.forEach((value, keys)=>{
    console.log(value, keys)
})