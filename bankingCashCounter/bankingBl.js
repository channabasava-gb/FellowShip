const bank = require('../utility/queue');
const read = require('readline-sync');

exports.banking = (amount, limit) => {
    try {
        var obj = new bank.Queue();

        for (let i = 1; i <= limit; i++) {
            obj.enqueue(i);

        }
        do {
            let choice = read.question("Enter the option 1-Deposit, 2-Withdraw\n");
            if (choice == 1) {
                let cash = read.question("Enter the amount how much you want deposited");
                if (cash <= 0) {
                    console.log("please enter the amount more than 0");

                    cash = read.question("please enter the depoit amount\n");
                }
                if (cash > 0) {

                    amount = amount + parseInt(cash);
                    console.log("the amount is=", amount);
                    limit--;
                }
            }

            else if (choice == 2) {
                if (amount > 0) {
                    let withdraw = read.question("how much you want please enter the mony");
                    if (withdraw > amount) {
                        console.log("Cash is not available please try later");
                        //withdraw=read.question("Enter the withdraw amount whithin--" +amount+ "\n");
                        obj.deleteLast();

                    }
                    else {
                        amount = amount - parseInt(withdraw);
                        console.log("the amount is is=", amount);
                        limit--;
                    }
                }
                else {
                    console.log("the amount is not avalible");
                }

            }

        } while (limit != 0);
    }
    catch (e) {
        console.log(e.message);
        console.log(e.name);
    }
}