const { findPairsInListsByBruteForce } = require('../solutions/bruteForce/index');
const { findPairsInListsByBloomFilter } = require('../solutions/bloomFilter/index');
const { findPairsInListsByCountMinSketch } = require('../solutions/countMinSketch/index');

/**
 * Space analysis of each solution using Node's built in process methods
 * @param {Number} iterations (default: 1)
 * @return {Object} results
 */


class SpaceAnalysis {
  constructor(interations) {
    this.iterations = interations;
    this.bruteForceSpace = [];
    this.bruteForceTime = [];
    this.bloomFilterSpace = [];
    this.bloomFilterTime = [];
    this.countMinSketchSpace = [];
    this.countMinSketchTime = [];
  }

  analyzeBruteForceSolution() {
    for (let i = 0; i < this.iterations; i += 1) {
      let hrstart = process.hrtime();
      findPairsInListsByBruteForce('care_teams.csv');
      let hrend = process.hrtime(hrstart);
      let spaceUsage = process.memoryUsage().heapUsed / 1024 / 1024;
      this.bruteForceSpace.push(spaceUsage);
      let timeUsage = (hrend[0] * 1000 + hrend[1] / 1000000);
      this.bruteForceTime.push(timeUsage);

    }
  }

  analyzeBloomFilterSolution() {
    for (let i = 0; i < this.iterations; i += 1) {
      let hrstart = process.hrtime();
      findPairsInListsByBloomFilter('care_teams.csv');
      let hrend = process.hrtime(hrstart);
      let spaceUsage = process.memoryUsage().heapUsed / 1024 / 1024;
      this.bloomFilterSpace.push(spaceUsage);
      let timeUsage = (hrend[0] * 1000 + hrend[1] / 1000000);
      this.bloomFilterTime.push(timeUsage);
    }
  }

  analyzeCountMinSketchSolution() {
    for (let i = 0; i < this.iterations; i += 1) {
      let hrstart = process.hrtime();
      findPairsInListsByCountMinSketch('care_teams.csv');
      let hrend = process.hrtime(hrstart);
      let spaceUsage = process.memoryUsage().heapUsed / 1024 / 1024;
      this.countMinSketchSpace.push(spaceUsage);
      let timeUsage = (hrend[0] * 1000 + hrend[1] / 1000000);
      this.countMinSketchTime.push(timeUsage);
    }
  }

  displayAverageSpaceResults(solution) {
    let average = this[solution].reduce((average, iteration) => {
      return average + iteration;
    }) / this[solution].length;

    console.log(`The average ${solution} used after ${this.iterations} iterations is: ${average} MB`);
  }

  displayAverageTimeResults(solution) {
    let average = this[solution].reduce((average, iteration) => {
      return average + iteration;
    }) / this[solution].length;

    console.log(`The average ${solution} used after ${this.iterations} iterations is: ${average} ms`);
  }
}


module.exports = SpaceAnalysis;

// spaceAnalysis();
