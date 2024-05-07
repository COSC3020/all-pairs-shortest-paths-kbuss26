// Adapted from Dijkstra's algorithm exercise

// Requirements
const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

// Test graphs
testGraph1 = [[[1, 2], [2, 2], [3, 5]], [[0, 2], [2, 10], [3, 1]], [[0, 10], [1, 1], [3, 1]], []]
/* 0,  2,  2,  5
   2,  0,  10, 1
   10, 1,  0,  1
   0,  0,  0,  0  */

testGraph2 = [[[1, 5]], [[0, 12], [1, 20]]] // Reflexive test
testGraph3 = [[[0, 2024]]] // n = 1 case
testGraph4 = [] // n = 0 case
testGraph5 = [[[1, 3], [2, 3]], [[0, 7], [2, 7]], [[0, 11], [1, 11]]]


// Asserts
assert(JSON.stringify(allPairsShortestPaths(testGraph1)) === JSON.stringify([[0, 2, 2, 3], [2, 0, 4, 1], [3, 1, 0, 1], [Infinity, Infinity, Infinity, 0]]));
assert(JSON.stringify(allPairsShortestPaths(testGraph2)) === JSON.stringify([[0, 5], [12, 0]]));
assert(JSON.stringify(allPairsShortestPaths(testGraph3)) === JSON.stringify([[0]]));
assert(JSON.stringify(allPairsShortestPaths(testGraph4)) === JSON.stringify([]));
assert(JSON.stringify(allPairsShortestPaths(testGraph5)) === JSON.stringify([[0, 3, 3], [7, 0, 7], [11, 11, 0]]));