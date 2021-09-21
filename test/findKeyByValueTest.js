const assert = require('chai').assert
const findKeyByValue = require("../findKeyByValue")

describe("#findKeyByValue", () => {
  it("should return drama when passed the variable bestTVShowsByGenre as defined below and 'The Wire'", () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
  })
  it("should return undefined when passed a show not included in the object", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
  })
})