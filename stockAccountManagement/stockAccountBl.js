/********************************************************
* @description :read in Stock Names, Number of Share, Share Price. 
* @return :Print a Stock Report with total value of each Stock 
*********************************************************/
const fs = require('fs')
class stockManagement {
    constructor() {
        this.content = null;
        this.fileName = null;
    }
    //parsing the json files
    jsonParse(fileName) {
        this.fileName = fileName;

        this.content = JSON.parse(fs.readFileSync(fileName));
    }
    //used to display
    disp() {
        this.content.Stock.forEach(element => {
            console.log(element);
        });
    }
    //Returns total worth
    value() {
        var sum1 = 0;
        this.content.Stock.forEach(element => {
            sum1 = sum1 + element.price * element.numberOfShares

        });
        this.content.Stock.forEach(element => {
            console.log(element.name + ' is at Rs--->' + element.price * element.numberOfShares);
        });
        console.log('totale value of the stock is---> ' + sum1 + "Rs");
    }
}
module.exports = {
    stockManagement
}