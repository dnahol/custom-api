'use strict';

module.exports = function(params, res) {
  var md5 = require('md5');
  var email = params[0];

  var emailHash = md5(email);
  var imageUrl = 'http://www.gravatar.com/avatar/' + emailHash;
  return imageUrl;
}
