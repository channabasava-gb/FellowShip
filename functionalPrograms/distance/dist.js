/**
 * @file :dist.js
 * @module :functional
 * @author :channabasava
 * @version :6.9.0
 * @since :13-Nov-2019
 */
const access = require('./distBl');
let input = require("readline-sync");
let x = input.questionFloat("Enter the distance of x ");
let y = input.questionFloat("enter the diatance of y ");
access.distance(x, y);