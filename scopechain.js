var a = 11;

function A() {
    var b = 12
    function B(){
        var c = 23
        console.log(c)
    }

    function C () {
        var d = 56
        console.log(d)
    }
    console.log(b)
    D()
    B()
    C()
}

function D (n) {
    return n + a
}

// var a is a global variable , it can be access from anywhere

// Creational Phase
// Var a = undefined
// Var a Can Access on function D
// Var B = Undefined
// VAr c = undefined
// VAr d = undefined
// B can be print outed , bcz it in on his own function scope
// Console log C is granted bcz it is on his own scope
// Var D is also granted to print outed
// FUncftion D Can't Dop anything cz Function D Is not Called Yet

// Function A Scope's
// var a, b
// Function : Functon B, Function C / D Also Can be Called From Outside

// Function B Scope's
// Var a, b, c
// Function : Functon B, Function C / D Also Can be Called From Outside

// Function C Scope's
// var a, b, d
// Function : Functon B, Function C / D Also Can be Called From Outside

// Function D Scope's
// Var a, n
// Functions : A()



// Executional Phase
// Var a = 1
// Var b = 12
// Var c = 23
// Var d = 56
