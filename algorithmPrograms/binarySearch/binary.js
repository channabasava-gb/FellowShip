/**
 * @file: binary.js.
 * @module: algorithm
 * @author: channabasava
 * @version:6.9.0
 * @since:13-Nov-2019
 */
let read = require('readline-sync')
const refer = require('../../utility/utility')
let arr = read.question('enetr the array')
let key = read.question('enetr the element to be searched')
let result = refer.binarySearch(arr, key)

if (result == -1) {
    console.log('element is not found:' + key)
} else {
    console.log('element is found:' + key)
}
refer.binarySearch(arr, key)
