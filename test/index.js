const Analysis = require('./analysis');

let solutionAnalysis = new Analysis(100);
solutionAnalysis.analyzeBruteForceSolution();
solutionAnalysis.displayAverageSpaceResults('bruteForceSpace');
solutionAnalysis.displayAverageTimeResults('bruteForceTime');

solutionAnalysis.analyzeBloomFilterSolution();
solutionAnalysis.displayAverageSpaceResults('bloomFilterSpace');
solutionAnalysis.displayAverageTimeResults('bloomFilterTime');

solutionAnalysis.analyzeCountMinSketchSolution();
solutionAnalysis.displayAverageSpaceResults('countMinSketchSpace');
solutionAnalysis.displayAverageTimeResults('countMinSketchTime');
