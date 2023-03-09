// test case helpers
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

// functions
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


// test case 1
const numbers = [1, 2, 3, 4, 5, 5, 6, 3];
assertArraysEqual(map(numbers, number => number % 2), [1, 0, 1, 0, 1, 1, 0, 1]);

// test case 2
const names = ["Angel Ren", "Ashwini Hegde", "Catherine Mitchell", "Eric Kovalevskyy"];
assertArraysEqual(map(names, name => name.toUpperCase()), ["ANGEL REN", "ASHWINI HEGDE", "CATHERINE MITCHELL", "ERIC KOVALEVSKYY"]);

// test case 3
const laptopConditions = ["old", "new", "openboxed", "refeburished", "new", "new"];
assertArraysEqual(map(laptopConditions, laptopCondition => {
  if (laptopCondition === "new") {
    laptopCondition = "sold";
  }
  return laptopCondition;
}), ["old", "sold", "openboxed", "refeburished", "sold", "sold"]);

