const assertArraysEqual = require("../assertArraysEqual");
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), `\u2714 Assertion Passed: 1,2,3 === 1,2,3`)
  })
  it("returns failed for [1,2,3], [3,2,1]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]), "\u274C Assertion Failed: 1,2,3 !== 3,2,1")
  })
  it("returns passed for['1', '2', '3'], ['1', '2', '3']", () => {
    assert.strictEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]), `\u2714 Assertion Passed: 1,2,3 === 1,2,3`)
  })
  it("returns failed for ['1', '2', '3'], ['1', '2', 3]", () => {
    assert.strictEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]), "\u274C Assertion Failed: 1,2,3 !== 1,2,3")
  })
}
)