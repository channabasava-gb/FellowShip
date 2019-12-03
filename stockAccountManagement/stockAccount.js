/****************************************************************************************
* @Execution : default node : cmd> stock.js
* @description :calculate the value of each stock and total value
* @overview : To prunt the stock report
* @author : channabasava <channabasavabml@gmail.com>
* @version : 6.9.0
* @since : 13 November 2019
******************************************************************************************/
try {
    const stock = require('../stockAccountManagement/stockAccountBl')
    let obj = new stock.stockManagement()
    obj.jsonParse('/home/admin1/channabasava/fellowshipJavascript/oops/stockAccountManagement/stockAccount.json')
    obj.value()
} catch (e) {
    console.log(e.message)
}