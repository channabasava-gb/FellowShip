/**
 * Execution default cmd>node.js
 * @purpose :To check Given year is Leap year are not
 */
exports.leapYear = () => {
  if (year.length == 4) {
    let n = parseInt(year);
    if ((n % 400 == 0) || ((n % 4 == 0 && n % 100 != 0))) {
      console.log("yes it is leapYear:" + n);
    } else {
      console.log("not a leapYear:" + n);
    }
  }
};

