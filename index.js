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
  assertArraysEqual: assertArraysEqual,
  eqObjects: eqObjects,
  letterPositions: letterPositions,
  assertEqual: assertEqual,
  findKey: findKey,
  map: map,
  assertObjectsEqual: assertObjectsEqual,
  findKeyByValue: findKeyByValue,
  middle: middle,
  countLetters: countLetters,
  flatten: flatten,
  tail: tail,
  countOnly: countOnly,
  head: head,
  takeUntil: takeUntil,
  eqArrays: eqArrays,
  without: without
};