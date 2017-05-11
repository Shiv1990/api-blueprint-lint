var drafter = require('drafter');
var fs = require('fs');

var options = {};

module.exports = (file) => {
  return new Promise((resolve, reject) => {
    drafter.parse(fs.readFileSync(file, 'utf8'), options, function(err, result) {
      if (err) {
        reject(err);
      } else {
        var annotations = result.content.filter((item) => {
          return item.element == 'annotation';
        });
        resolve(annotations);
      }
    });
  });
};
