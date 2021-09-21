const assert = require('chai').assert
const flatten = require('../flatten')
// console.log(flatten([1, 2, [3, 4], 5, [6]]));

describe("#flatten", () => {
  it("should return a 2d array, no need to refer to an array within an array", () => {
    assert.strictEqual(flatten([1, 2, [3, 4], 5, [6]])[3], 4)
  })
})