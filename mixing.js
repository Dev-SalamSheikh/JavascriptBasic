// If we want to set some object to an functions or objects prototype what should we have to do?
// We Have to use the method called Object.assign(T, S). T mean the Tagrgeted Location and S mean the sources what we want to assign
// Lets See How To Implement

// We Can Reduce Our Code By Creating a Mixing Function as Well

function mixin (target, ...sources){
    Object.assign(target, ...sources);
}


let canEat = {
    eat : function(){
        console.log('Can Eat...')
    }
}

let canWalk = {
    walk: function(){
        console.log('Can Walk...')
    }
}

let canSwim = {
    swim : function(){
        console.log('Can Swim')
    }
}

function Person (name){
    this.name = name;
}

let person = new Person("Salam Sheikh");
mixin(Person.prototype, canEat, canWalk);
console.log(Person.prototype);

function goldFish (name) {
    this.name = name
}

let fish = new goldFish("Ukraine")
mixin(goldFish.prototype, canEat, canSwim);
console.log(goldFish.prototype);

// Now We Can Simply add multiply objects as an prototype of another object or function 

