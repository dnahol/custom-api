'use strict';

module.exports = function(req, res, params) {

  var str = decodeURIComponent(params[0]);

  var count = str.split('').length;

  res.write(`${count}\n`);
  res.end('\n');

}
