const letterPositions = require('../letterPositions');
const assert = require('Chai').assert;

describe("#letterPositions", () => {
  it("returns [4, 5, 11] for letter l in 'AngelLinxuelRen'", () => {
    assert.deepEqual(letterPositions('AngelLinxuelRen').l, [4, 5, 11]);
  });
  it("returns [10, 13] for letter o in 'My cat is Oreo.'", () => {
    assert.deepEqual(letterPositions('My cat is Oreo.').o, [10, 13]);
  });
});