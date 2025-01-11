//Implement a function clamp(number, lower, upper) to restrict a number within the inclusive lower and upper bounds.

// // Within the bounds, return as-is.
// clamp(3, 0, 5); => 3

// // Smaller than the lower bound.
// clamp(-10, -3, 5);  => -3

// // Bigger than the upper bound.
// clamp(10, -5, 5); => 5

 function clamp(value, lower, upper) {

  if(value<lower){
    return lower;
  }
  if(value>upper){
    return upper;
  }
  return value;
}

//Another soolution:

function clamp(value, lower, upper) {
  return Math.min(upper, Math.max(lower, value));
}

// //NOTE->>>
// Edge Cases
// upper is smaller than lower. We can assume we aren't given this case.
