const eqArrays = require("../eqArrays");
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true [1, 2, 3] === [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns true [1, 2, 3] !== [3, 2, 1]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it("returns true ['1', '2', '3'] === ['1', '2', '3']", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
  });

  it("returns true ['1', '2', '3'] !== ['1', '2', '3']", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
  });

});