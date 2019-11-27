/**
 * @filename :flip.js
 * @module: basic Core.
 * @author: channabasava
 * @version:6.11.3
 * @since:13-Nov-2019
 */

const access = require('./flipBl');
const input = require("readline-sync");
let toss = input.question("enter the toss");
access.flipCoin(toss);