'use strict'

module.exports = function(params, res) {
  var operation = params.shift(); //math, pow, etc.

  switch (operation) {
    case 'sum':
      var sum = require('./sum')(params);
      res.write(`${sum}`);
      break;
    case 'minus':
      var minus = require('./minus')(params);
      res.write(`${minus}`);
      break;
    case 'multiply':
      var multiply = require('./multiply')(params);
      console.log( 'params: ', params );
      console.log(  'multiply: ', multiply  );
      res.write(`${multiply}`);
      break;
    case 'divide':
      var divide = require('./divide')(params);
      res.write(`${divide}`);
      break;
    case 'pow':
      var pow = Math.pow(params[0], params[1]);
      res.write(pow.toString());
  }
  res.end('\n');
};
