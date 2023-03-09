const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

// test case
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
assertEqual(eqObjects(multiColorShirtObject, longSleeveShirtObject), false);
