const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2714 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C Assertion Failed: ${actual} !== ${expected}`);
  }
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true) // => false