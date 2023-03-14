const flatten = function(array) {
  let newArray = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      for (let elm of item) {
        newArray.push(elm);
      }
      continue;
    }
    newArray.push(item);
  }
  return newArray;
};

module.exports = flatten;
