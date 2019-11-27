/**
 * @file :harmonic.js
 * @module :basic core
 * @author :channabasava
 * @version :6.9.0
 * @since :13-Nov-2019
 */
const access = require('./harmonicBl');
var input = require("readline-sync");
number = input.question("Enter the number");
access.harmonic();