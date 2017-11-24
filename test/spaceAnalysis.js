const { findPairsInListsByBruteForce } = require('../solutions/bruteForce/index');
const { findPairsInListsByBloomFilter } = require('../solutions/bloomFilter/index');
const { findPairsInListsByCountMinSketch } = require('../solutions/countMinSketch/index');

/**
 * Space analysis of each solution using Node's built in process methods
 * @param {Number} iterations (default: 1)
 * @return {Object} results
 */


const spaceAnalysis = function(iterations = 1) {
  let results = {
    bruteForce: {},
    bloomFilter: {},
    countMinSketch: {},
  };

  for (let i = 0; i < iterations; i += 1) {
    let hrstart = process.hrtime();
    findPairsInListsByBruteForce('care_teams.csv');
    let hrend = process.hrtime(hrstart);
    results.bruteForce = process.memoryUsage();
    console.log('time: ', hrend);
  }

  for (let i = 0; i < iterations; i += 1) {
    let hrstart = process.hrtime();
    findPairsInListsByBloomFilter('care_teams.csv');
    let hrend = process.hrtime(hrstart);
    results.bloomFilter = process.memoryUsage();
    console.log('time: ', hrend);
  }

  for (let i = 0; i < iterations; i += 1) {
    let hrstart = process.hrtime();
    findPairsInListsByCountMinSketch('care_teams.csv');
    let hrend = process.hrtime(hrstart);
    results.countMinSketch = process.memoryUsage();
    console.log('time: ', hrend);
  }

  console.log(results);
  return results;
}

// module.exports = spaceAnalysis;

spaceAnalysis();
