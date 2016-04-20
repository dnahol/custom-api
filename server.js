'use strict';

//when you require './math'
//you're actually requiring the index.js
//in the dir named math

//const PORT = 8000;

const PORT = process.env.PORT || 8000;

var http = require('http');
var fs = require('fs');

var server = http.createServer( (req, res) => {

  var params = req.url.split('/');
  params.shift(); //throwing out empty string at beginnning
  var resource = params.shift();

  switch(resource) {
    case 'math': require('./math')(params, res); break;
    case 'str': require('./str')(req, res, params); break;
    case '':  // url is '/' and resource is '' means serve index.html
      var data = fs.readFileSync('./public/index.html');
      res.end(  data.toString() );
      return;
    case 'age': require('./age')(params, res); break;
    case 'image':
      var imageUrl = require('./image')(params, res);
      res.end(  imageUrl  );
      break;
    case 'pokemon':
      var pokemon = require('./pokemon')(params, res);
      //console.log( pokemon );
      res.end(  pokemon  );
      break;
    case 'magicEight':
      var magicEight = require('./magicEight')(params, res);
      res.end(  magicEight  );
      break;

    default:
    //see if they want a file
      //console.log('resource: ', resource);

      fs.readFile(`./public/${resource}` , (err, data) => {
        if(err) { // looking for nonexistant file
          res.statusCode = 404;
          res.write('Not Found.');
          res.end('\n');
        } else { // file found!
          res.end(  data.toString()  );
        }

      });
  }
});


server.listen(PORT, function(err) {
  if(err) return console.log('error!: ', err);
  console.log(`Node server listening on port ${PORT}`);
});
