function SayhateMe (){
    console.log("Ami Tomake Valobashi Na");
    console.log("AMi Tomake Vulte Chai");
}

SayhateMe();

function doubleIt (no){
    var output = no * 2;
    return output;
}

var firstCount = doubleIt(10);
var secondCount = doubleIt(100);
var total = firstCount + secondCount;
console.log(total);


function friendsAges (faiyaz, sagor, farabi){
    var result = faiyaz + sagor + farabi;
    return result
}

var totalAges = friendsAges(20, 19, 18);
console.log(totalAges);