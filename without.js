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
const eqArrays = function(array1, array2) { 
  let answer = false;
  for(let i = 0; i < array1.length; i++) {
    if(array1[i]===array2[i]) {
      answer = true;
    }
  }
  for(let j = 0; j < array2.length; j++) {
    if(array2[j] !== array1[j]) {
      answer = false;
    }
  }
  return answer;
}

const without = function (original, itemsToRemove) {
  let removed = original.filter((item) => !itemsToRemove.includes(item))
  return removed;
}
const words = ["hello", "world", "lighthouse"]
console.log(without(words, ["lighthouse"]));