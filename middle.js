// TEST/ASSERTION FUNCTIONS
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;

};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
    return;
  }
  console.log(`🛑🛑🛑Assertion Failed: ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`);

};

// ACTUAL FUNCTION
const middle = function(array) {
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      return [array[array.length / 2 - 1], array[array.length / 2]];
    }
    return [array[Math.floor(array.length / 2)]];
  }
  return [];
};

// TEST CODE
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([]), []);