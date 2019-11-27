/**
 * @file :qudr.js
 * @module :functional
 * @author :channabasava
 * @version :6.9.0
 * @since :13-Nov-2019
 */
const access = require("./qudrBl");
let input = require("readline-sync");
let input1 = input.question("Enter the value of input1 ");
let input2 = input.question("Enter the value of input2 ");
let input3 = input.question("Enter the value of  input3 ");
access.qudratic(input1, input2, input3);
