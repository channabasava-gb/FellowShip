/**
 * @file:queueanagram.js
 * @module:dataStracture
 * @author :channabsava <channabasavabml@gmail.com>
 * @version :6.9.0
 * @since :13-Nov-2019
 */
const input = require("readline-sync");
const access = require("./queueAnagramBl");
let prim = new access.Deque();
let str = input.question("enter the Number ");
let primeanag = prim.prime(str);
console.log(primeanag);
console.log(prim.printqueue());