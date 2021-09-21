const assert = require('chai').assert
const findKey = require('../findKey')
describe("#findKey", () => {
  it("should return the name of the key when given the value", () => {
  let results1 = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2)
  assert.strictEqual(results1, "noma")
  })
  it("should returned undefined when no key with that value exists", () => {
  let results2 =  findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 7)
  assert.strictEqual(results2, undefined)
  })
})