// if We expect some valid value from an user and if they are not giving us the value we are expecting then we can throw our custom error to them and also tell them to iuput the right value

// Lets see how we can create a custom error om our code
// We just have to use some keyword to the negative logic
// Have to use throw new Error('our custom message')

// let n = 10;

// if(n<100){
//     throw new Error('n is not smaller then 100');
// }


// If we want to handle some error what is very simple or someone has created it , we can do it with if else statement 
// it is aplicable only for the normal error, not for the syntactical error or any functional error

function changeInt (v){
    let result = Number.parseInt(v);
    // now lets apply the logic and see how to ha handle the problem
    if(!result){
        return 'This is not a valid input number what you put on the box, Please push the right number into the box to get access on the next level'
    }
    return result;
}

let change = changeInt('hnsfbsufbg');
console.log(change)


// Bonus Tips
// Nan equal Nan is Not Same, it will show False
// Undefined equal Undefined is True