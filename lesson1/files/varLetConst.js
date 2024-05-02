function example() {
    if (true) {

        var x; 

        
        var varVariable = "I'm a var";


        
        let letVariable = "I'm a let";
        const constVariable = "I'm a const";
        
        console.log(varVariable); // Output: I'm a var
        console.log(letVariable); // Output: I'm a let
        console.log(constVariable); // Output: I'm a const
    }
    
    // varVariable is accessible here
    console.log(varVariable); // Output: I'm a var
    
    // letVariable and constVariable are not accessible here
    // console.log(letVariable); // Error: letVariable is not defined
    // console.log(constVariable); // Error: constVariable is not defined
}

example();