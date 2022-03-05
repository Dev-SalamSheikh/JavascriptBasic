// Modules Mean the clean code , a single file is for every single function and object, after making the file how to connect them with each others?
// We have to expoert from the created file and have to import where we want to get the function or methods


// for single function or method we have to just call one time Export default FileName

// and for export multiply function from one file how we can do it?
// We have to add export keywords infront of every single function or method we have to export

export let div = (a,b) => a - b
export let add = (a,b) => a + b
export let multi = (a,b) => a * b
export let subs = (a,b) => a / b
export let cons = () => console.log('hello')