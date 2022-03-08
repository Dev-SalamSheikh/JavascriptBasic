let BASE_URL = 'https://jsonplaceholder.typicode.com';

fetch(`${BASE_URL}/users`)
.then(res => res.json())
.then(data => {
    console.log(data)
    return Promise.resolve('something')
})
.then(str => {
    console.log(str)
    return Promise.resolve('ANother Promise')
})
.then(another => {
    console.log(another)
})
.catch(e => {
    console.log(e)
})

// Lets See How We can make a custom fetch api method

function getData (url){
    return new Promise ((resolve, reject) => {
        const xhr = new XMLHttpRequest();
    xhr.open('get', url);

    xhr.onreadystatechange = function(e){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
               let response = JSON.parse(xhr.response)
               resolve(response)
            }else{
                reject(new Error('Error Found'))
            }
        }
    }

    xhr.send();
    })
}

getData('https://jsonplaceholder.typicode.com/users/1')
.then(data => {
    console.log(data)
    return Promise.resolve('New')
})
.then(get => {
    console.log(get)
})
.catch(e => {
    console.log(e)
})