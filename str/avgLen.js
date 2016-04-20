'use strict';

module.exports = function(req, res, params) {

  var str = decodeURIComponent(params[0]);
  var words = str.split(' ');
  var sumLen = words.reduce( (sum, word) => {
    return sum + word.length;
  }, 0);
  var avg = sumLen / words.length;
  res.write(`${avg}\n`);
  res.end('\n');

}
