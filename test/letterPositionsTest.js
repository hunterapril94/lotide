const assert = require('chai').assert
const eqArrays = require('../eqArrays')
const letterPositions = require('../letterPositions')
describe("#letterPositions", () => {
  it("should return an array of [3, 5, 15, 18] when asked where the h's in 'lighthouse in the house'", () => {
    assert.strictEqual(eqArrays(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]), true)
  })
})