// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    // console.log(`\u2714 Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    // console.log(`\u274C Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

// TEST CODE
module.exports = assertEqual;
