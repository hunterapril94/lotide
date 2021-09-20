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
module.exports = middle