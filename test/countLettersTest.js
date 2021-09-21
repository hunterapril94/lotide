const assert = require('chai').assert
const countLetters = require('../countLetters')
describe("#countLetters", () => {
  it("should return 2 for the property l when given the input 'April Larsen'", () => {
    assert.strictEqual(countLetters("April Larsen").l, 2)
  })
})
