/**
* @Execution default cmd>node.js
* @purpose :we have to find the harmonic number
 */
exports.harmonic = () => {
  let result =1;
  for (let i = 2; i <= number; i++) {
    result +=1/ i;
  }
  console.log(result);
}