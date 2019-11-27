const get = require('./gamblerBl');
let input = require("readline-sync");
let stake = input.question("enter the stake ");
let goal = input.question("enter the goal ");
let trial = input.question("eumber of traials ");
get.gambler(stake, goal, trial);