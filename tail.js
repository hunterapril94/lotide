const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2714 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C Assertion Failed: ${actual} !== ${expected}`);
  }
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(JSON.stringify(result), JSON.stringify(["Lighthouse", "Labs"]));