var fibo =[ 0, 1];
for ( var i = 2; i <= 20; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
    // console.log(fibo[i], fibo[i-1], fibo[i-2]);
}

console.log(fibo);

// With Function

function fibonacci (n){
    for ( var i = 2; i <= n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibonacci;
}

var result = fibonacci(20);
console.log(result);