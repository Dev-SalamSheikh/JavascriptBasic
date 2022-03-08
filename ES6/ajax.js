// // What is Ajax?
// // Ajax is s system , which is use to get data by hitting browsers api from the giver URl and Show to us


// // Lets See How we can get some data with rest api and Ajax

// // // First We have to store a method in to variables
// // const xhr = new XMLHttpRequest();
// // // Now have to say what we are doing , getting or setting data and from which url or server by xhr.open()
// // xhr.open('get', 'https://jsonplaceholder.typicode.com/user');

// // // Now have to set after getting the data from the server or url what we are doing next with xhr.onreadystateschange and have to handle with function
// // xhr.onreadystatechange = function(e){
// //     if(xhr.readyState === 4){
// //         if(xhr.status === 200){
// //             console.log(xhr.response)
// //         }else{
// //             console.log(xhr.status)
// //         }
// //     }
// // }

// // // Now Finhally we have to send the request using xhr.send Method
// // xhr.send();

// // Lets Try TO do it with function as well

// function getRequest (url, callback) {
//     // const xhr = new XMLHttpRequest();
//     // xhr.open('get', url);

//     // xhr.onreadystatechange = function(e){
//     //     if(xhr.readyState === 4){
//     //         if(xhr.status === 200){
//     //            let response = JSON.parse(xhr.response)
//     //            callback(null, response)
//     //         }else{
//     //             console.log(xhr.status)
//     //         }
//     //     }
//     // }

//     // xhr.send();
// }

getRequest('https://jsonplaceholder.typicode.com/posts', (err, res) => {
    if(err){
        console.log(err)
    }else{
        console.log(res)
    }
})