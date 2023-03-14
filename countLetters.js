const countLetters = function(string) {
  const letterCounts = {};
  const lowerCaseStr = string.toLowerCase();
  for (let letter of lowerCaseStr) {
    if (letterCounts[letter]) {
      letterCounts[letter] += 1;
      continue;
    }
    letterCounts[letter] = 1;
  }
  return letterCounts;
};

module.exports = countLetters;

