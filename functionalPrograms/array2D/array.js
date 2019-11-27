/**
 * @file :array2D.js
 * @module :functional
 * @author :channabasava
 * @version :6.9.0
 * @since :13-Nov-2019
 */
const access = require('./arrayBl');
const input = require("readline-sync");
col = input.question("Enter th col");
row = input.question("Enter the row");
access.array2d(row, col);