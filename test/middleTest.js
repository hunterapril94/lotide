const middle = require("../middle")
const assertArraysEqual = require("../assertArraysEqual")
const assert = require('chai').assert

describe("#middle", () => {
  it("should return 3 for [1, 2, 3, 4, 5]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]), `\u2714 Assertion Passed: 3 === 3`)
  })
  it("should return [3, 4] for [1, 2, 3, 4]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]), `\u2714 Assertion Passed: 2,3 === 2,3`)
  })
})