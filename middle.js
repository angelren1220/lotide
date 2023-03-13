const middle = function(array) {
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      return [array[array.length / 2 - 1], array[array.length / 2]];
    }
    return [array[Math.floor(array.length / 2)]];
  }
  return [];
};

module.exports = middle;