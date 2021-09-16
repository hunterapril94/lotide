const map = function(array, cb) {
  const results = []
  for (let item of array) {
    results.push(cb(item));
  }
  return results;
}
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
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0])
const results2 = map(words, word => word.length)
const results3 = map(results2, num => num*2)
// console.log(results1)
map(words, x=>x[0])
console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"]))
console.log(assertArraysEqual(results2, [6, 7, 2, 5, 3]))
console.log(assertArraysEqual(results3, [12, 14, 4, 10, 6]))