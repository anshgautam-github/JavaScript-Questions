// Implement a function dropWhile(array, predicate) that creates a slice of array excluding elements dropped from the beginning. 
// Elements are dropped until predicate returns falsey. Your function should not modify the original array.



//Using FOR LOOP

function dropWhile(array,predicate) {
    let lastIndex ;
    for ( lastIndex =0; lastIndex <array.length; lastIndex++) {
      if (!predicate(array[lastIndex], lastIndex, array)) {
        break;
      }
    }

    return array.slice(lastIndex);
}
