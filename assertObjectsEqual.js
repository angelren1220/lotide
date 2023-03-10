const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`โโโ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return;
  }
  console.log(`๐๐๐Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;