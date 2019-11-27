/**
 * @Execution default cmd>node.js
 * @purpose :Read the primeFactors
  */
exports.primeFactor = (number) => {
    for (var i = 2; i < number; i++) {
        while (number % i == 0) {
            console.log(i + "")
            number = number / i;
        }
    }
    if (number > 2) {
        console.log(number)
    }
}






