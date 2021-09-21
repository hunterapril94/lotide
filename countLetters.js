const countLetters = function(string) {
  let letterCount = {};
  let lowCaseString = string.toLowerCase();
  for (const element of lowCaseString) {
    if (element !== " ") {
      if (letterCount[element]) {
        letterCount[element] += 1;
      } else {
        letterCount[element] = 1;
      }
    }
  }
  return letterCount;
};

module.exports = countLetters