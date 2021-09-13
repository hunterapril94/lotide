// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\u2714 Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("\u274C Assertion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("aaa", "aaa");
assertEqual(1, 3);