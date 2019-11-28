/**
 * @Execution default cmd>node.js
 * @purpose :for measuring the time that elapses between the start and end clicks
  */
exports.stopwatch = (starttime, stopwatch, elapsedtime) => {
  var d = new Date();
  starttime = d.getMilliseconds();
  console.log('the strat time is:' + starttime);
  var x = new Date();
  stoptime = x.getMilliseconds();
  console.log('stop time is the:' + stoptime);
  elapsedtime = stoptime - starttime;
  console.log('lose time is the:' + elapsedtime);
  return elapsedtime;
};