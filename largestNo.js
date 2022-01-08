function largestNumber(no){
    var larger = no[0];
    for(var i = 0; i < no.length; i++){
        var element = no[i];
        if(element > larger){
            larger = element;
        }
    }
    return larger;
}

var numbers = [10, 20, 40, 49, 90, 443];
var output = largestNumber(numbers);
console.log(output);