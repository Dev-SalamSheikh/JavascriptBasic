// What is set?
// Set is a collection which is included on ES6

// What does the set collection do?
// Set store an array where no single data can be duplicated or copied.


// Lets See How to implement the Set Collection
// We can pass an default array into the set collections parameter
let set = new Set([1,2,3,4,5])

// We can add data into the set collections by set.add();
set.add(2);
set.add(4);
set.add(6);
set.add(7);

// As we know, set will not the set.add(4,2) cz into set method no data can be stored in multiply time

console.log(Set)

// There is lots of method comes with set collection
// The have some differnent behaviour

// 1 - set.size => to check the set methods size, i mean how many data is passed in it
// 2 - set.clear => to clear the whole set collection
// 3 - set.remove() => to delete an specific property or data from the set collection
// 4 - set.has() => to check the value is the value already in to the set collection?
// 5 - set.keys() => it will retrurn the iterator function from the set collection
// 6 - set.values() => also do return the iterator function
// 7 - set.entries() => also do return the iterator function from the set collection 
// 8 - We can also play with the for of loop or For Loops easily