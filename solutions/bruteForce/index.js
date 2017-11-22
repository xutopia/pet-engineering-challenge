const stdinput = require('../../io/stdinput');
const csvjson = require('csvjson');
const fs = require('fs');

/**
 * Brute force approach to determining the number of times pairs of doctors appear in multiple lists
 * @param  {File} csvFile
 * @param {Number} occurences
 * @return {Array} pairs - list of pairs of doctors that match the criteria
 */
const findPairsInListsByBruteForce = function(file, occurences) {
  const data = stdinput(file);
  // console.log(data);
  let doctorPairs = {};

  return pairs;
}

// findPairsInListsByBruteForce('./care_teams.csv');
