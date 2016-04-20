'use strict'

module.exports = function(numStrs) {
  return numStrs.reduce((quotient, num) => {
    return quotient / parseInt(num);
  });
};
