/***************************************************************
* @Execution : default node : cmd> ordered.js
* @Purpose : to study the functionals working.
* @description :Ordered List
* @overview : To list th numbers in a file
* @author : channabasava <channabasavabml@gmail.com>
* @version : 6.9.0
* @since : 13 November 2019
****************************************************************/
let Fnum = require('../orderedll/orderedBlLinkedList')
let input = require('readline-sync')
let num = input.questionInt("Enter the num to be found: ")
Fnum.ifFoundAddElseDel(num)