const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2714 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  // find and return first key at which there's a a truthy value for the function
  // if none return undefined
  let result;
  for(let i in object) {
    if(callback(object[i])) {
      result = i;
      break;
    }
  }
  return result;
}

let results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
console.log(assertEqual(results1, "noma"))
let results2 =  findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 7)
console.log(assertEqual(results2, undefined))