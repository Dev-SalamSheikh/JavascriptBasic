// That is how we can pass a function as a arguments on another function
// That is Called Higher Order function

function add (a, b){
    return a + b ;
}

function total (a, b, func){
    let c = a + b;
    let d = a - b;

    return function(){
        let all = func(a, b)
        return all * c * d;
    }
}

var output = total(3, 4, add);
console.log(output());