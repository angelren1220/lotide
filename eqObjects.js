const customizedArraysEqual = function(arr1, arr2) {
  for(const item of arr1) {
    if (!arr2.includes(item)) {
      return false;
    }
  }
  for(const item of arr2) {
    if (!arr1.includes(item)) {
      return false;
    }
  }
  return true;
}

const eqObjects = function(object1, object2) {
  const keysArray1 = Object.keys(object1);
  const keysArray2 = Object.keys(object2);
  if (!customizedArraysEqual(keysArray1, keysArray2)) {
    return false;
  }

  for (const key of keysArray1) {
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!customizedArraysEqual(object1[key], object2[key])) {
          return false;
        }
        return true;

      }
      return false;
    }

    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};
module.exports = eqObjects;
