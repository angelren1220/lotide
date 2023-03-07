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

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let element of source) {
    for (let item of itemsToRemove) {
      if (element !== item) {
        newArray.push(element);
      }
    }
  }
  return newArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);