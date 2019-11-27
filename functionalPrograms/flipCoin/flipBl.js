/**
 * Execution defaulr cmd>node.js
 * @purpose :flip coin toss and head print the percentage
 */
exports.flipCoin = (toss) => {
    let head = 0;
    let tail = 0;
    try {
      for (let i = 0; i < toss; i++) {
        if (Math.random() > 0.5) {
          head++;
        } else {
          tail++;
        }
      }
      let headPercentage = (head / toss) * 100;
      console.log('print the total head percentage is:'+headPercentage);
      let tailPercentage = (tail / toss) *100;
      console.log('print the total tail percentage is:'+tailPercentage);
    } catch (e) {
      console.log(e);
    }
  };

