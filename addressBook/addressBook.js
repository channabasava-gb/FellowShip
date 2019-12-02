let AddressBook = require('../addressBook/adderssBookBl')
//creating a object of the addressbook
let addressObject = new AddressBook();
//parsing json into json object
addressObject.jsonParse('/home/admin1/channabasava/fellowshipJavascript/oops/addressBook/addressBook.json');
//adding address to the addressbook

const read = require('readline-sync');

var choice = read.question("Enter you choice\n 1: Add Record\n");
switch (parseInt(choice)) {
    case 1: let fname = read.question("Enter the first fname\n");
        let lname = read.question("Enter the first lname\n");
        let hno = read.question("Enter the first house no\n");
        let place = read.question("Enter the first place\n");
        let dis = read.question("Enter the first district\n");
        addressObject.addAddress(fname, lname, hno, place, dis);
        break;
    

}

