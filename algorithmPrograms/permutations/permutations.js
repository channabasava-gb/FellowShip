/**
 * @file:permutation.js
 * @module: algorithm
 * @author: channabasava
 * @version:6.9.0
 * @since:13-Nov-2019
 */
const input = require("readline-sync");
const access = require('../../utility/utility');
var permutations = input.question("enter the number");
var result = access.permutation(permutations);
console.log(result);