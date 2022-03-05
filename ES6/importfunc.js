// We we have just exported many function from one file then how we can get the function for use?
// Well, Simple we can get all the function we have exported in an single object and we can also destructured them and get specific function for our work

// How to import All?
import * as Myfunc from './func'

// How to import specific function for our works? i mean, how to destructured them?
import {cons, subs} from './func'

console.log(subs(10,2))