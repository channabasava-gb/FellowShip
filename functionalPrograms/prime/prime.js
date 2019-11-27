/**
 * @file :prime.js
 * @module :Basic Core
 * @author :Channabasava
 * @version :6.9.0
 * @since :13-Nov-2019
 */
const access = require('./primeBl');
var input = require('readline-sync');
var number = input.question('enter the primefactor number');
access.primeFactor(number);