/**
 * @Execution default cmd>node.js
 * @purpose :finding two daimenstional array
  */
exports.array2d = (row, col) => {
  try {
    let input = require("readline-sync");
    var array = [];
    for (let i = 0; i < row; i++) {
      array.push([]);
      for (let j = 0; j < col; j++) {
        var array2 = input.question("enter the elements");
        array[i][j] = array2;
      }
    }
    console.log(array);
  } catch (e) {
    console.log(e);
  }
};