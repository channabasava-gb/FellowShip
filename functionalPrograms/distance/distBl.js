/**
 * @Execution default cmd>node.js
 * @purpose :to find the distance between x value and y value 
  */
exports.distance = (x, y) => {
  try {

    let distance = Math.sqrt(x * x + y * y);
    console.log(distance);
  } catch (error) {
    console.log("give proper number");
  }
};