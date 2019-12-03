/****************************************************************************************
* @Execution : default node : cmd> inventoryData.js
* @description :to Create InventoryManager to manage the Inventory
* @overview : to create Inventory Object from JSON. The InventoryManager 
* will call each Inventory Object in its list
* @author : channabasava <channabasavabml@gmail.com>
* @version : 6.9.0
* @since : 13 November 2019
******************************************************************************************/

let file = require("fs");
let util = require('../utility/utility');
function inventory() {
    try {

        let data = file.readFileSync('/home/admin1/channabasava/fellowshipJavascript/oops/inventoryDataManagement/inventoryData.json')
        let object = JSON.parse(data);
        util.inventoryObj(object);
        console.log(object);

    } catch (e) {
        console.log(e.name);
        console.log(e.message);

    }
}
inventory();