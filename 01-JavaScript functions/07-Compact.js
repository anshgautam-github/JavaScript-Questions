// Implement a function compact(array) that creates an array with all falsey values removed. The values false, null, 0, '', undefined, and NaN are falsey.
// Arguments ->>>> array (Array): The array to compact.
// Returns ->>>>>> (Array): Returns the new array of filtered values.

//Method -1
function compact(array) {
  const result=[];
  for(let i=0; i<array.length;i++){
    if(array[i]){
      result.push(array[i]);
    }
  }
  return result;
}

//Metho-2 ( simpler solution that leverages Array.prototype.filter )

function compact(array) {
 return array.filter(Boolean);
 }

// The Boolean function in JavaScript converts any value to a boolean (true or false).
// When used as a callback for filter(), it effectively filters out all "falsy" values from the array.
//   const array = [0, 1, false, 2, '', 3, null, undefined, NaN, 4];
// How the Filtering Works:
// 0 → Boolean(0) → false → Removed
// 1 → Boolean(1) → true → Kept
// false → Boolean(false) → false → Removed
// 2 → Boolean(2) → true → Kept
