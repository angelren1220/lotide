const countOnly = require('../countOnly');
const assert = require('Chai').assert;

describe("#countOnly", () => {
  it("", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result["Jason"], 1);
    assert.strictEqual(result["Karima"], undefined);
    assert.strictEqual(result["Fang"], 2);
    assert.strictEqual(result["Agouhanna"], undefined);
  });
});
