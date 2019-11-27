/**
 * @file :stop.js
 * @module :functional
 * @author :channabasava
 * @version :6.9.0
 * @since :13-Nov-2019
 */
const access = require('./stopBl');
var input = require("readline-sync");
var starttime = input.question("Enter one to start");
var stoptime = input.question("Enter two to stop time ");
access.stopwatch(starttime, stoptime);