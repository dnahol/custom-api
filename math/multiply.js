'use strict'

module.exports = function(numStrs) {
  return numStrs.reduce((product, num) => {
    return product * parseInt(num);
  });
}
