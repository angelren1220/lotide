const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = function(object, callback) {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (callback(object[key])) {
      return key;
    }
  }
};

// test code
const students = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
const result1 = findKey(students, x => x.stars === 2);// => "noma"
const result2 = findKey(students, x => x.stars === 3);
assertEqual(result1, "noma");
assertEqual(result2, "Akaleri");
