const { findPairsInListsByBruteForce } = require('./solutions/bruteForce/index');
const { findPairsInListsByBloomFilter } = require('./solutions/bloomFilter/index');
const { findPairsInListsByCountMinSketch } = require('./solutions/countMinSketch/index');

findPairsInListsByBruteForce('care_teams.csv', 40, true);
findPairsInListsByBloomFilter('care_teams.csv', 40, true);
findPairsInListsByCountMinSketch('care_teams.csv', 40, true);
