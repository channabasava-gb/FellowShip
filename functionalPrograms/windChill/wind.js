/**
 * @file :wind.js
 * @module :functional
 * @author :channabasava
 * @version :6.9.0
 * @since :13-Nov-2019
 */
const aceess = require('./windBl');
let input = require("readline-sync");
let temp = input.questionFloat("Enter the temperature (in Fahrenheit)");
let speed = input.questionFloat("Enter the wind speed (Miles per hour) ");
aceess.windchil(temp, speed);