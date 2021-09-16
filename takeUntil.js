const takeUntil = function(array, callback) {
  results = []
  for(let i = 0; i < array.length; i++) {
    if(callback(array[i])) {
      break;
    }
    else {
      results.push(array[i])
    }
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
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));
console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]))