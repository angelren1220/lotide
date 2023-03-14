const eqArrays = function(arr1, arr2) {
  if (!Array.isArray(arr1)) {
    return false;
  }
  if (!Array.isArray(arr2)) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])){
      return eqArrays(arr1[i], arr2[i]);
    }
    if (!Array.isArray(arr1[i]) && !Array.isArray(arr2[i])){
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    else{
      return false;
    }
  }
  return true;

};

module.exports = eqArrays;