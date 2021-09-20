const middle = require("../middle")
const assertArraysEqual = require("../assertArraysEqual")
const eqArrays = require("../eqArrays")

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]))
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [3, 4]))