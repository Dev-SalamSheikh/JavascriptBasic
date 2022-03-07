// throw new Error gives us same kind of error, if we need some specific kind of error for our custom works then we have to build our own error 
// Lets see how we can build an error 

class CustomError extends Error {
    constructor(msg){
        super(msg)

        if(Error.captureStackTrace){
            Error.captureStackTrace(this, CustomError)
        }
    }
}

try{
    console.log('Hello')
    throw new CustomError('Hello, I am Your Custom Throwen Error')
    console.log('Hello')
    console.log('Hello')
}catch(e){
    console.dir(e)
}finally{
    console.log('Hello, I am Finally Block and i am showing my body at any situation')
}