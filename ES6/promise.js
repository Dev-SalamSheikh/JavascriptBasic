// Lets Check The Basic Implementation Of Promise

function getIphone (isPassed){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(isPassed){
                resolve('Done')
            }else{
                reject(new Error('Failed'))
            }
        }, 2000)
    })
}

// We cant Store The Function In to a Variable, For the Asynchronous Task
// If We want the Value then we have to apply .then and .catch method

getIphone(false)
.then((res)=>{
    console.log(res)
})
.catch((e)=>{
    console.log(e.message)
})