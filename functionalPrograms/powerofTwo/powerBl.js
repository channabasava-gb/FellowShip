/**
 * @Execution default cmd>node.js
 * @purpose :we have find the number power of two
  */
exports.powerof = () => {
  let power = 1;
  for (let i = 1; i <= num; i++) {
    power = power * 2;
    console.log("power :" + power);
  }
};
