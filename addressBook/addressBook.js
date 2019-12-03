try {
    const fs = require('fs')
    const address_Book = require("../addressBook/adderssBookBl")
    let jsonFile = JSON.parse(fs.readFileSync("/home/admin1/channabasava/fellowshipJavascript/oops/addressBook/addressBook.json"))
    address_Book.addressOperations(jsonFile)
    } catch (e) {
    console.log(e.message)
    }