const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let element of source) {
    for (let item of itemsToRemove) {
      if (element !== item) {
        newArray.push(element);
      }
    }
  }
  return newArray;
};

module.exports = without;
