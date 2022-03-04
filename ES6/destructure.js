// If we need some data from an object or array with in another obejct then we simple can destructuree the object
// Lets see how we can do this

let person = {
    name : 'Salam Sheikh',
    mail : 'dev.salamsheikh@gmail.com',
    address : {
        city : 'Bogura',
        Division : 'Rajshahi'
    }
}

// We Can access our specific Data like this
// name/mail is the name of the inner object data, = person is the name of targetd object where the data has been stored
// We Can also get the data from an inner objects too

let {name, mail, address : {city, Division}} = person;
console.log(name, mail, city, Division)


// We Can Also Access The Data From an Array Too

let arr = [1,2,3,4,5]
let[frist, second, third, , fifth] = arr
console.log(frist, second, third, fifth)

// We can simple ingore the index value which we dont need to see by ','