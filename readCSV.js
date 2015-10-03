var csv = require('csv-parser');
var fs = require('fs');

var opts = {
  raw: false, // do not decode to utf-8 strings
  separator: ';', // specify optional cell separator
  newline: '\n', // specify a newline character
  headers: ['index', 'message'] // Specifing the headers
};

fs.createReadStream('some.csv')
  .pipe(csv(opts))
  .on('data', function(data) {
    console.log('row', data);
  });
