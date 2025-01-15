// Implement a function fill(array, value, [start=0], [end=array.length]) that fills an array with values from start up to, but not including, end.

// Note: This method mutates array.

// Arguments
// array (Array): The array to fill.
// value (*): The value to fill array with.
// [start=0] (number): The start position.
// [end=array.length] (number): The end position.
// Returns
// (Array): Returns array.

// Examples
// fill([1, 2, 3], 'a'); // ['a', 'a', 'a']
// fill([4, 6, 8, 10], '*', 1, 3); // [4, '*', '*', 10]
// fill([4, 6, 8, 10, 12], '*', -3, -1); // [4, 6, '*', '*', 12]


function fill(array, value, start = 0, end = array.length) {
  const length = array.length;
  // Normalize negative start
  start = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
  // Normalize negative end
  end = end < 0 ? Math.max(length + end, 0) : Math.min(end, length);
  // Ensure start is less than or equal to end
  if (start >= end) {
    return array;
  }
  // Fill the array within the range
  for (let i = start; i < end; i++) {
    array[i] = value;
  }
  return array;
}
