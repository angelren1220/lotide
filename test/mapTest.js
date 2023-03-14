const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');
// test case 1
const numbers = [1, 2, 3, 4, 5, 5, 6, 3];
assertArraysEqual(map(numbers, number => number % 2), [1, 0, 1, 0, 1, 1, 0, 1]);

// test case 2
const names = ["Angel Ren", "Ashwini Hegde", "Catherine Mitchell", "Eric Kovalevskyy"];
assertArraysEqual(map(names, name => name.toUpperCase()), ["ANGEL REN", "ASHWINI HEGDE", "CATHERINE MITCHELL", "ERIC KOVALEVSKYY"]);

// test case 3
const laptopConditions = ["old", "new", "openboxed", "refeburished", "new", "new"];
assertArraysEqual(map(laptopConditions, laptopCondition => {
  if (laptopCondition === "new") {
    laptopCondition = "sold";
  }
  return laptopCondition;
}), ["old", "sold", "openboxed", "refeburished", "sold", "sold"]);