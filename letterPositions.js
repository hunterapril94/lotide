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
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) !== " ") {
      if (results[sentence.charAt(i)]) {
        results[sentence.charAt(i)].push(i);
      } else {
        results[sentence.charAt(i)] = [i];
      }
      
    }
  }
  return results;
};

console.log(assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]));