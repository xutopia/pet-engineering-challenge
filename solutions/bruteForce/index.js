const stdinput = require('../../io/stdinput');
const stdoutput = require('../../io/stdoutput');
const csvjson = require('csvjson');
const fs = require('fs');

/**
 * Brute force approach to determining the number of times pairs of doctors appear in multiple lists
 * @param {File} csvFile
 * @param {Number} occurences
 * @return {Array} pairs - list of pairs of doctors that match the criteria
 */
const findPairsInListsByBruteForce = function(file, occurences = 40) {
  const data = stdinput(file);
  // console.log(data);
  let doctorPairs = {};
  let pairs = [];

  data.forEach(list => {
    let listLength = list.length;
    let sortedList = list.sort();
    for (let i = 0; i < listLength - 1; i += 1) {
      for (let j = i + 1; j < listLength; j += 1) {
        let pair = `${sortedList[i]},${sortedList[j]}`;
        if (doctorPairs[pair]) {
          doctorPairs[pair] += 1;
        } else {
          doctorPairs[pair] = 1;
        }
      }
    }
  });

  for (let doctors in doctorPairs) {
    if (doctorPairs[doctors] >= occurences) {
      pairs.push(doctors);
    }
  }
  console.log(pairs);
  // let results = json2csv({ fields, data: pairs.join('\n') });

  stdoutput(pairs, `bruteForceResult.csv`);
  return pairs;
  json
}

findPairsInListsByBruteForce('./care_teams.csv');
