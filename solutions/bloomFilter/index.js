const stdinput = require('../../io/stdinput');
const stdoutput = require('../../io/stdoutput');
const { BloomFilter } = require('bloom-filters');

/**
 * Bloom Filter approach to determining the number of times pairs of doctors appear in multiple lists
 * @param {File} csvFile
 * @param {Number} occurences
 * @return {Array} pairs - list of pairs of doctors that match the criteria
 */
const findPairsInListsByBloomFilter = function(file, occurences = 40) {
  const data = stdinput(file);
  let bloomFilter = new BloomFilter(1000000, 0.01);
  let doctorPairs = {};
  let pairs = [];

  data.forEach(list => {
    let listLength = list.length;
    let sortedList = list.sort();

    for (let i = 0; i < listLength - 1; i += 1) {
      for (let j = i + 1; j < listLength; j += 1) {
        let pair = `${sortedList[i]},${sortedList[j]}`;

        if (bloomFilter.has(pair)) {
          if (doctorPairs[pair]) {
            doctorPairs[pair] += 1;
          } else {
            doctorPairs[pair] = 2;
          }
        } else {
          bloomFilter.add(pair);
        }
      }
    }
  });

  for (let doctors in doctorPairs) {
    if (doctorPairs[doctors] >= occurences) {
      pairs.push(doctors);
    }
  }

  stdoutput(pairs, `bloomFilterResult.csv`);
  return pairs;
}

module.exports = findPairsInListsByBloomFilter;

findPairsInListsByBloomFilter('./care_teams.csv');
