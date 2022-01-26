
function evenifyAll(numbersAll) {
    for (let i = 0; i < numbersAll.length; i++) {
        const num = numbersAll[i];
        if (num % 2 == 0) {
            console.log(num, 'is even number')
        }
        else{
            console.log(num, 'is odd number')
        }
    }
}

numbers = [10, 12, 13, 15, 16];
evenifyAll(numbers)

friendAge = [20, 22, 23, 25, 26]
evenifyAll(friendAge);

function domultiply(i){
    // console.log(i*i); it will say this is undefined
    return(i*i);
}
var totalSquare = domultiply(10);
console.log(totalSquare);