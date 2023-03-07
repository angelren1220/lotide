// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1, array.length);
};

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words).length, words.length);
const empty = [];
assertEqual(tail(empty).length, empty.length);