/**
 * @file:arryprime2D.js
 * @module:dataStracture
 * @author :channabasava <channabasavabml@gmail.com>
 * @version :6.9.0
 * @since :13-Nov-2019
 */
const access = require("./primeBl");
const input = require("readline-sync");
let num = input.question("enter the Number ");
access.prime2D(num);