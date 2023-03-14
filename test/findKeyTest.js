const findKey = require('../findKey');
const assertEqual = require('../assertEqual');

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