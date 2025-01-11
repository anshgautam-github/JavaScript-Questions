// Implement a function numberOfArguments, to return the number of arguments it was called with. Note that this value is the actual number of arguments, 
// which can be more or less than the defined parameter count (which is determined by Function.prototype.length).


//Using arguments object
function numberOfArguments() {
  return arguments.length;
}

//Using rest parameters
 function numberOfArguments(...args) {
  return args.length;
}




// Edge Cases
// Calling a function with undefined. undefined is still counted as a parameter. Default function parameters will be initialized with default values if no value or undefined is passed.

// function foo(a = 1) {
//   return a;
// }

// foo(undefined); // 1
// foo(); // 1



// Notes
// What happens for functions that have default parameters? The answer is that they behave exactly the same.

// function foo(a = 1, b = 2) {
//   return arguments.length;
// }

// foo(); // 0
// foo(3); // 1
// foo(undefined); // 1
