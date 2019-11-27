/**
 * @file:anagrampalidrome.js
 * @module: algorithm
 * @author: channabasava
 * @version:6.11.3
 * @since:20-Nov-2019
 */
const access = require('../../utility/utility');
const input = require("readline-sync");
var anagram = input.question("enter the string name");
var result = access.anagramPalindrome(anagram);
console.log(result);