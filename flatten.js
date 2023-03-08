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

const flatten = function(array) {
  let newArray = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      for (let elm of item) {
        newArray.push(elm);
      }
      continue;
    }
    newArray.push(item);
  }
  return newArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, [3, 4], 5, [6]]);
assertArraysEqual(flatten([1, [2, [3, [4]], 5]]), [1, [2, [3, [4]], 5]]);
