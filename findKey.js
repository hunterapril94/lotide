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
module.exports = findKey