/**
 * @Execution default cmd>node.js
 * @purpose :This program takes a command-line argument N and prints a 
 * table of the powers of 2 
  */
exports.powerof = (num) => {
    let power = 1;
    for (let i = 1; i <= num; i++) {
        power = power * 2;
        return power;
    }
};
