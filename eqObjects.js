const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const keysArray1 = Object.keys(object1);
  const keysArray2 = Object.keys(object2);
  if (keysArray1.length !== keysArray2.length) {
    return false;
  }

  for (const key of keysArray1) {
    const val1 = object1[key];
    const val2 = object2[key];
    if (Array.isArray(val1)) {
      if(!eqArrays(val1, val2)){
        return false;
      }
      continue;
    }
    
    if (typeof(val1) === "object") {
      if (!eqObjects(val1, val2)) {
        return false;
      }
      continue;
    }

    if (val1 !== val2) {
      return false;
    }
  }

  return true;
};
module.exports = eqObjects;
