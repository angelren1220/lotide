const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);