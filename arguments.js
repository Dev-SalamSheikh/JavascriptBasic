function addNumbers(number1, number2){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    return sum;
}

var total = addNumbers(20, 30, 10, 20, 15, 100);
console.log(total);