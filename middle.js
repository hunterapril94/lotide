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
};

const middle = function(array) {
  let midArray = []
  let avg = Math.floor(array.length/2)
  if (array.length > 2 && array.length % 2 === 0) {
    midArray.push(array[avg]);
    midArray.push(array[avg+1])
  }
  if (array.length > 2 && array.length % 2 === 1) {
    midArray.push(array[avg])
  }
  return midArray;
}

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]))
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [3, 4]))