exports.gambler = (stake, goal, trial) => {
    let bets = 0;
    let wins = 0;
    for (let i = 0; i <= trial; i++) {
      let cash = stake;
      while (cash > 0 && cash < goal) {
        bets++;
        if (Math.random() < 0.5) {
          cash++;
        } else {
          cash--;
        }
        if (cash == goal) {
          wins++;
        }
      }
      console.log(wins + " wins of " + trial);
      console.log("Percent of games won = " + (100.0 * wins) / trial);
      console.log("Avg # bets = " + (1.0 * bets) / trial);
    }
  };
  