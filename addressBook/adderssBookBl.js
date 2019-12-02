//importing  the fs
let fs = require('fs')
//importing the readlinesync
let r = require('readline-sync')
//creating the addressbook class
class AddressBook {
    constructor() {
        this.content = null;
        this.fname = null;
    }
}
AddressBook.prototype.jsonParse = (fname) => {
    try {
        this.fname = fname;
        this.content = JSON.parse(fs.readFileSync(this.fname));
        console.log("file name--->", this.fname);
        console.log("Contye--->", this.content);


    } catch (err) {
        console.log("error" + err)
    }
}

//it will add address to the json file
AddressBook.prototype.addAddress = (firstname, lastname, houseno = null, city = null, district = null) => {

    this.content.push({
        "firstname": firstname,
        "lastname": lastname,
        "houseno": houseno,
        "city": city,
        "district": district

    })
    console.log("added succefully");
    console.log(this.content);
    fs.writeFileSync(this.fname, JSON.stringify(this.content));

}
AddressBook.prototype.jsonSave = () => {



}
//export the class
module.exports = AddressBook;