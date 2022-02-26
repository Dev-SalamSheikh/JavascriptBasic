// This Power Is Basically For Practicing the Function Return from an another function
// Lets See How It Look Like & How It Works!

function base (b){
    function power(n){
        let result = 1;
        for(let i = 0; i < b; i++){
           result *= n;
        }
        return result;
    }
    return power;
}

var base5 = base(5);
console.log(base5(5));

// That is How We Can Use a Function in to a Function as Well
// This is also known as a higher order function too!