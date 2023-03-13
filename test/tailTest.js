const assert = require('Chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [1, 2] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});
