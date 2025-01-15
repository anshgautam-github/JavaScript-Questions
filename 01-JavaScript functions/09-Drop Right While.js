// Implement a function dropRightWhile(array, predicate) that creates a slice of array excluding elements dropped from the end.
// Elements are dropped until predicate returns falsey. Your function should not modify the original array.

// Arguments ->>>> array (Array): The array to query.
// predicate (Function)->>>>: The function invoked per iteration. The function is invoked with three arguments: (value, index, array). 
// Note that the array passed in is the original array.
// Returns: Array


//Using FOR LOOP
function dropRightWhile(array, predicate) {
  
  for (let lastIndex = array.length - 1; lastIndex >= 0; lastIndex--) {
    if (!predicate(array[lastIndex], lastIndex, array)) {
      break;
    }
  }

  return array.slice(0, lastIndex + 1);
}


//Using WHILE LOOP
function dropRightWhile(array, predicate) {
  let lastIndex = array.length - 1;

  while (lastIndex >= 0 && predicate(array[lastIndex], lastIndex, array)) {
    lastIndex--;
  }
  return array.slice(0, lastIndex + 1);
}
