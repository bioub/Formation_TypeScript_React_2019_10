'use strict';

function sum(a, b) {
  result = a + b; // ReferenceError: result is not defined

  return result;
}


sum(1, 2);
console.log(result); // ReferenceError: result is not defined

function arrayContains(array, val) {
  for (i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === val) {
      return true;
    }
  }
  return false;
}

const nbs = [2, 3, 4];

console.log(arrayContains(nbs, 2)); // true
console.log(arrayContains(nbs, 1)); // false

console.log(i); 
