// The Currying Means One FUnction will carry only one parameters! If we need multiply parameters in one function then we have to create single inner function for every parameters instead !

// Lets see how currying Method looks like

function currying (a){
    return function(b){
        return function(c){
            return function(d){
                return function (e){
                    // At last er have to return all the function as like we want to do with it! i'm doing simple summation thats why i'm multiplying them
                    return a + b + c + d + e;
                }
            }
        }
    }
}

// Lets Store the whole function in a variable
let result = currying(10)(10)(10)(10)(10);
// as we all know , we are able to pass only one arg in a time, thats why we have to add function vocation system to call
console.log(result);