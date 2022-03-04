// Default Parameters Mean if user forget to pass the parameters value then it should return a default value which is already in the parameters included

function square (n = 5){
    return n * n;
}

console.log(square(10))