const assertArraysEqual = function(array1, array2) {
  let answer = false;
  let message = "";
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      answer = true;
    }
  }
  for (let j = 0; j < array2.length; j++) {
    if (array2[j] !== array1[j]) {
      answer = false;
    }
    if (answer === true) {
      message = `\u2714 Assertion Passed: ${array1} === ${array2}`;
    }
    if (answer === false) {
      message = `\u274C Assertion Failed: ${array1} !== ${array2}`;
    }
  }
  return message;
};
module.exports = assertArraysEqual