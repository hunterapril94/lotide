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
const eqObjects = function(object1, object2) {
  let answer = true;
  for(const key in object1) {
    if(!object2[key]) {
      answer = false;
    }
    if(Array.isArray(object1[key])) {
      answer = eqArrays(object1[key], object2[key])
    }
    else if(object2[key] !== object1[key]) {
      answer = false;
    }
  }
  for(const key2 in object2) {
    if(!object1[key2]) {
      answer = false;
    }
    if(Array.isArray(object2[key2])) {
      answer = eqArrays(object1[key2], object2[key2])
    }
    else if(object2[key2] !== object1[key2]) {
      answer = false;
    }
  }
  return answer;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

module.exports = eqObjects