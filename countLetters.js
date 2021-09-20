const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2714 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let letterCount = {};
  let lowCaseString = string.toLowerCase();
  for (const element of lowCaseString) {
    if (element !== " ") {
      if (letterCount[element]) {
        letterCount[element] += 1;
      } else {
        letterCount[element] = 1;
      }
    }
  }
  return letterCount;
};
let myName = "April Larsen";
assertEqual(countLetters(myName).l, 2);
console.log(countLetters(myName));
module.exports = countLetters