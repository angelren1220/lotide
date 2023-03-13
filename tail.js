const tail = function(array) {
  console.log(array.slice(1));
  return array.slice(1);
};

module.exports = tail;