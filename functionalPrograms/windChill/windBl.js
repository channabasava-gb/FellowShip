/**
 * @Execution default cmd>node.js
 * @purpose :finding the temprture and windChill
  */
exports.windchil = (temp, speed) => {
  if (Math.abs(temp) > 50 || Math.abs(speed) > 120 || Math.abs(speed) < 3) {
    console.log("out of range");
  } else {
    let weather =
      35.4 + 0.6215 * temp + (0.4275 * temp - 35.75) * Math.pow(speed, 0.16);
    console.log(weather);
  }
};