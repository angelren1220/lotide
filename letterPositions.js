const isLetter = function(ch) {
  return (/[a-zA-Z]/).test(ch);
};

const letterPositions = function(sentence) {
  const results = {};
  const string = sentence.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (isLetter(string[i])) {
      if (!results[string[i]]) {
        let positions = [];
        results[string[i]] = positions;
        positions.push(i);
        continue;
      }
      results[string[i]].push(i);
    }

  }
  return results;
};

module.exports = letterPositions;