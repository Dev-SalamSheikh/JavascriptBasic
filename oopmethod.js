// Call Method is working when we want to target a specific object in a empty or existing function
// Lets See How to Implement the Call Method In JS
// In Call Function we can add a object as a argument, and secondly the argument's value can be passed by any data types as like we can write it after by after

function myFunc (c, d){
    console.log(this.a + this.b + c + d);
}

myFunc.call({a:50, b:50}, 50, 50);

// Lets See How to Implement the Apply Method In JS
// In Apply Function we can add a object as a argument, and secondly we have to set the argument's value in array data types otherwise it will throw a NaN to us

function myFunc (c, d){
    console.log(this.a + this.b + c + d);
}

myFunc.apply({a:50, b:50},[50, 50]);


// The Bind Method Means The Binding of Data's
// The Binding Method is not for calling , it is just bind the data to a function what we are targeting , if we want to show or call the data what we have binded then we have to strore it on a another variables after that we have to call the functions by variables name

function myFunc (c, d){
    console.log(this.a + this.b + c + d);
}

let result = myFunc.bind({a:50, b:50}, 50, 50);
result();