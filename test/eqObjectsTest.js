const eqObjects = require("../eqObjects");
const assert = require('Chai').assert;

describe("#eqObjects", () => {
  it("returns true { color: 'red', size: 'medium' } === { size: 'medium', color: 'red' }", () => {
    const shirtObject = { color: 'red', size: 'medium' };
    const anotherShirtObject = { size: 'medium', color: 'red' };
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });

  it("returns false { color: 'red', size: 'medium' } === { size: 'medium', color: 'red', sleeveLength: 'long' }", () => {
    const shirtObject = { color: 'red', size: 'medium' };
    const longSleeveShirtObject = { size: 'medium', color: 'red', sleeveLength: 'long' };
    assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });

  it("returns true { color: ['red', 'blue], size: 'medium' } === { size: 'medium', color: ['red', 'blue']}", () => {
    const multiColorShirtObject = { colors: ['red', 'blue'], size: 'medium' };
    const anotherMultiColorShirtObject = { size: 'medium', colors: ['red', 'blue'] };
    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });

  it("returns true { color: ['red', 'blue], size: 'medium' } === { size: 'medium', color: ['red', 'blue', 'yellow']}", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", color: ["red", "blue", "yellow"] };
    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), false);
  });

  it("returns true { a: { z: 1 }, b: 2 } === { a: { z: 1 }, b: 2 }", () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });

  it("returns false { a: { y: 0, z: 1 }, b: 2 } !== { a: { z: 1 }, b: 2 }", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });

  it("returns false { a: { y: 0, z: 1 }, b: 2 } !== { a: 1, b: 2 }", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });

});