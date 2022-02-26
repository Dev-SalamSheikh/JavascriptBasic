//  Closure is when a function is able to remember and access his lexical scope even when the function executing outside its lexical scope!


// Example Of Clousre in Javascript 


// function msg(){
//     let a = 'Hello Salam Sheikh!'

//     function sayMsg(){
//         console.log(a);
//     }
//     sayMsg();
// }

// msg();

// Another Example Of Closure 

// 



for(let i = 0; i <= 5; i++){
    setTimeout(function(){
        console.log(i)
    }, 1000 * i)
}

// for(let i = 0; i <= 5; i++){
//        setTimeout(function closure1() {
//           console.log(i) ;
//          }, 1000 * i)
// }
