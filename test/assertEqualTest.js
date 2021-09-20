const assertEqual = require("../assertEqual")
const assert = require('chai').assert

describe("#assertEqual", () => {
  it("should return failed for 'Lighthouse Labs', 'Bootcamp'", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false)
  })
  it("should return true for 1, 1", () => {
    assert.isTrue(assertEqual(1, 1))
  })
  it("should return true for aaa, aaa", () => {
    assert.isTrue(assertEqual("aaa", "aaa"))
  })
  it("should return false for 1, 3", () => {
    assert.isFalse(assertEqual(1, 3))
  })
})