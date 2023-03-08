const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

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

// test case
assertEqual(countLetters("LHL").l, 2);
assertEqual(countLetters("angelren").e, 2);
assertEqual(countLetters("Angel Linxue Ren").l, 2);
