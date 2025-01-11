// Implement a function functionLength, to return the number of parameters a function expects. 
//Note that this is a static value defined by the function, not the number of arguments the function 
// is called with (which is determined by arguments.length)

//Test CASES->>
// function foo() {}
// function bar(a) {}
// function baz(a, b) {}

// functionLength(foo); // 0
// functionLength(bar); // 1
// functionLength(baz); // 2


//LOGIC ->>
// Parameters: These are the variables defined in the function declaration (e.g., a, b, c in function add(a, b, c) {}).
// Arguments: These are the actual values passed when the function is called (e.g., add(1, 2) passes 2 arguments).


function functionLength(fn) {
  return fn.length;
}


// Important Notes:
// function.length only counts the parameters explicitly defined in the function.
// It does not consider default parameters or the ...rest parameter.
