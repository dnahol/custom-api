'use strict';

module.exports = function(req, res, params) {

  var op = params.shift().toLowerCase();
  console.log('op: ', op);
  // wordCount
  // /str/wordCount/theString
  switch (op) {
    case 'wordcount':
      require('./wordCount')(req, res, params);
      break;
    case 'charcount':
      require('./charCount')(req, res, params);
      break;
    case 'avglen':
      require('./avgLen')(req, res, params);
      break;
    default:
      res.statusCode = 404;
      res.write('Dude. Not Found, Bro.\n');
      res.end('\n');
  }
};
