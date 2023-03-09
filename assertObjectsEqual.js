const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) { //the key's index in keysArray does not matter in this case
      return false;
    }
  }
  return true;

};

const eqObjects = function(object1, object2) {
  const keysArray1 = Object.keys(object1);
  //console.log(keysArray1);
  const keysArray2 = Object.keys(object2);
  //console.log(keysArray2);
  if (!eqArrays(keysArray1, keysArray2)) {
    //console.log("keys array not equal!");
    return false;
  }

  for (const key of keysArray1) {
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        //console.log("both arrays");
        if (!eqArrays(object1[key], object2[key])) {
          //console.log("both arrays but values not equal");
          return false;
        }
        return true;

      }
      //console.log("only first is array");
      return false;
    }

    if (object1[key] !== object2[key]) {
      //console.log("not arrays and value not equal!");
      return false;
    }
  }

  return true;

};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return;
  }
  console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

// test code
assertObjectsEqual({ a: '1', b: 2 } , { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: 2, c: [] } , { b: 2, a: '1' });
