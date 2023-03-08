// functions for test case
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

// actual function
const isLetter = function(ch) {
  return (/[a-zA-Z]/).test(ch);
};

const letterPositions = function(sentence) {
  const results = {};
  const string = sentence.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (isLetter(string[i])) {
      if (!results[string[i]]) {
        let positions = [];
        results[string[i]] = positions;
        positions.push(i);
        continue;
      }
      results[string[i]].push(i);
    }

  }
  return results;
};

// test case
assertArraysEqual(letterPositions("AngelLinxuelRen").l, [4, 5, 11]);
assertArraysEqual(letterPositions("My cat is Oreo.").o, [10, 13]);