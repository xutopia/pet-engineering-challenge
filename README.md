# PET Code Challenge

The attached utf-8 encoded text file contains (mock) lists of care teams for 20,000 patients. Each line represents a list of doctors that a patient has seen, formatted as follows:
```
katie mitchell,steve edwards,melissa fleming,maurice simmmons,diane burke,debbie kuhn,tommy brooks,ella jennings
carolyn jennings,katie price,marc mills,steve edwards,brooke burke,bob flores,melissa fleming,kristina roberts
```

Write a program that takes a file or standard input, and produces a list of pairs of doctors which appear together in at least 40 different lists. For example, in the above sample, "steve edwards" and "melissa fleming" appear together twice, but every other pair appears only once. Your program should output the pair list to stdout in the same form as the input (e.g. doctor1 name,doctor2 name\n).
You MAY return an approximate solution, i.e. lists which appear at least 40 times with high probability, as long as you explain why this tradeoff improves the performance of the algorithm. Please include, either in comments or in a separate file, a brief description of the run-time and space complexity of your algorithm.
Your solution should be implemented in Javascript. Please include compilation/runtime instructions with your code.

## Getting Started

To run the standard test to find time and space usage for the brute force and bloom filter solution (assuming node and npm are installed):

```
$ npm i
$ npm test
```


## Analysis

M = Number of lists
N = Average number of doctors in each list

Brute Force Solution Time Complexity: O(M * N^2)
Brute Force Solution Space Complexity: O(M * N^2)

Bloom Filter Solution Time Complexity: O(M * N^2)
Bloom Filter Solution Space Complexity: O(M * N^2) (less pairs of doctors that only appear once)

Count Min Sketch Solution Time Complexity: O(M * N^3)
Count Min Sketch Solution Space Complexity: O(K) (K = pairs of doctors that appear 40 or more times)


## Conclusion

The use of a bloom filter presents a decrease in heap memory usage by roughly 2MB when compared to the brute force solution heap memory usage. However the bloom filter that was used resulted in a 10x increase in the amount of time necessary to find the solution.

The use of a count-min sketch seemed promising, but my implementation resulted in double the heap usage (around 85MB) compared to the bloom filter solution. The run-time of using a count-min sketch also increased on average by 1 second, relative to the run-time of the bloom filter solution.


## Authors

* **Tony Xu** - [xutopia](https://github.com/xutopia)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Cornell Medicine, Patient Engagement Engineering Team
