// Implement a function difference(array, values) that creates an array of array values not included in the other given arrays using SameValueZero for 
// equality comparisons. The order and references of result values are determined by the first array.

// Arguments ->>>>>> array (Array): The array to inspect , values (Array): The values to exclude.
// Returns ->>>>>> (Array): Returns the new array of filtered values.

// Examples
// difference([1, 2, 3], [2, 3]); // => [1]
// difference([1, 2, 3, 4], [2, 3, 1]); // => [4]
// difference([1, 2, 3], [2, 3, 1, 4]); // => []
// difference([1, , 3], [1]); // => [3]
// The function should return the original array values if values is empty.
// difference([1, 2, 3], []); // => [1, 2, 3]


//Method-1
function difference(array, values) {
  return array.filter((val)=>!values.includes(val));
}

//Method-2 (using set)

// During the filter() operation, we need to check for each element in array whether it exists in values.
// A Set makes this lookup process faster (O(1)), while searching in an array (using .includes()) would take longer (O(n)).

function difference(array, values) {
  const valueSet=new Set(values);
  return array.filter((ele)=>!valueSet.has(ele));
}

// We apply Set on values because:
// values is used for lookups, and Set makes lookups fast.
// Applying a Set on array doesn’t help filter it and might unintentionally remove duplicates from array.
