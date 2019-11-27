/***************************************************************
* @Execution : default node : cmd> ordered.js
* @Purpose : to study the functionals working.
* @description :balancedParentheses
* @overview : To check the string is balanecd or not
* @author : channabasava <channabasavabml@gmail.com>
* @version : 6.9.0
* @since : 13 November 2019
****************************************************************/
const balanced = require('./balancedBl')
let input = require('readline-sync');
let expression  = input.question("Enter the expression: ")
balanced.BalancedParentheses(expression )