const stdinput = require('../../io/stdinput');
const stdoutput = require('../../io/stdoutput');
const { CountMinSketch } = require('bloom-filters');

/**
 * Count-Min Sketch approach to determining the number of times pairs of doctors appear in multiple lists
 * @param {File} csvFile
 * @param {Number} occurences
 * @param {Boolean} writeToFile
 * @param {Number} epsilon - custom value for epsilon in the CM-Sketch (default: 0.000001)
 * @param {Number} delta - custom value for delta in the CM-Sketch (default: 0.999999)
 * @return {Array} pairs - list of pairs of doctors that match the criteria
 */
const findPairsInListsByCountMinSketch = function(file, occurences = 40, writeToFile, epsilon = 0.000001, delta = 0.999999) {
  const data = stdinput(file);
  let sketch = new CountMinSketch(epsilon, delta);
  let doctorPairs = {};
  let pairs = [];

  data.forEach(list => {
    let listLength = list.length;
    let sortedList = list.sort();

    for (let i = 0; i < listLength - 1; i += 1) {
      for (let j = i + 1; j < listLength; j += 1) {
        let pair = `${sortedList[i]},${sortedList[j]}`;

        sketch.update(pair);
        if (sketch.count(pair) >= occurences) {
          doctorPairs[pair] = 1;
        }
      }
    }
  });

  for (let doctors in doctorPairs) {
    pairs.push(doctors);
  }

  if (writeToFile) {
    stdoutput(pairs, `count-minSketchResult.csv`);
  }
  return pairs;
}

exports.findPairsInListsByCountMinSketch = findPairsInListsByCountMinSketch;

// findPairsInListsByCountMinSketch('./care_teams.csv', 40, true);
