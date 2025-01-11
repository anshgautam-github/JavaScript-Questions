// Implement a function mean(array) that returns the mean (also known as average) of the values inside array, which is an array of numbers.
// The function should return NaN if array is empty.

function mean(array) {
  if(array.length===0){
    return NaN;
  }
  let sum=0;
  for(let i=0; i<array.length; i++){
    sum+=array[i];
  }
  return sum/array.length;
}

//Shorter way

function mean(array) {
  return array.reduce((a, b) => a + b, 0) / array.length;
}
