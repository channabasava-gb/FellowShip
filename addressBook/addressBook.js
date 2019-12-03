/****************************************************************************************
* @Execution : default node : cmd> addressBook.js
* @description :to read the details of the person address
* @overview : To print the person addrress
* @author : channabasava <channabasavabml@gmail.com>
* @version : 6.9.0
* @since : 13 November 2019
******************************************************************************************/

try {
    const fs = require('fs')
    const address_Book = require("../addressBook/addressBookBl")
    let jsonFile = JSON.parse(fs.readFileSync("/home/admin1/channabasava/fellowshipJavascript/oops/addressBook/addressBook.json"))
    address_Book.addressOperations(jsonFile)
    } catch (e) {
    console.log(e.message)
    }