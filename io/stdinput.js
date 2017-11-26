const csvjson = require('csvjson');
const fs = require('fs');
const path = require('path');

/**
 * Import data from csv file into a json object
 * @param  {File} csvFile
 * @return {Array} data - comma and \n delimited csv data in an Array
 */
const csvToJSON = function(csvFile) {
  const data = fs.readFileSync(path.join(__dirname, `../assets/${csvFile}`), { encoding: 'utf-8' });

  const options = {
    delimiter: ',',
    quote: '"',
  };

  return csvjson.toArray(data, options);
}

module.exports = csvToJSON;
