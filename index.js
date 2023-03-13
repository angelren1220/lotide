const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const countLetters = require('./countLetters');
const takeUntil = require('./takeUntil');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');
const map = require('./map');
const without = require('./without');
const findKey = require('./findKey');
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');

module.exports = {
  assertArraysEqual,
  eqObjects,
  letterPositions,
  assertEqual,
  findKey,
  map,
  assertObjectsEqual,
  findKeyByValue,
  middle,
  countLetters,
  flatten,
  tail,
  countOnly,
  head,
  takeUntil,
  eqArrays,
  without
};