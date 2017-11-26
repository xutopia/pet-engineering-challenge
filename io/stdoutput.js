const fs = require('fs');
const path = require('path');

/**
 * Import data from csv file into a json object
 * @param  {JSON} data
 * @param  {string} fileName
 */
const stdoutput = function(data, fileName) {
  let filePath = path.join(__dirname, `../assets/${fileName}`);

  let file = fs.createWriteStream(filePath);
  file.on('error', function(err) { throw err });
  data.forEach((datum) => { file.write(datum + '\n'); });
  file.end();
}

module.exports = stdoutput;
