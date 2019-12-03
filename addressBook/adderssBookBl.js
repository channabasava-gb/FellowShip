const input = require("readline-sync")
const fs = require('fs')
//main function that shows the options to select and takes the values
addressOperations = (jsonFile) => {
    let N = input.questionInt("press \n 1) Edit the person \n 2) Add a new person \n 3) Delete person \n 4) Search by name\n 5) Print all contacts \n")
    switch (N) {
        case 1:
            editPerson(jsonFile);
            break;
        case 2:
            addPerson(jsonFile);
            break;
        case 3:
            deletePerson(jsonFile);
            break;
        case 4:
            searchByName(jsonFile);
            break;
        case 5:
            printFile(jsonFile);
            break;
    }
}
//edits the details of the person and update them
editPerson = (jsonFile) => {
    let i = input.questionInt('Enter the index of the person to edit\n')
    let content = input.questionInt(' 1) Edit firstName\n 2) Edit lastName\n 3) Edit houseNo\n 4) Edit taluk\n 5)Edit distric\n 6)Edit state\n')
    console.log(jsonFile[i])
    let update = input.questionInt('Enter the new content to update\n')
    switch (content) {
        case 1:
            jsonFile[i].firstName = update;
            break;
        case 2:
            jsonFile[i].lastName = update;
            break;
        case 3:
            jsonFile[i].houseNo = update;
            break;
        case 4:
            jsonFile[i].taluk = update;
            break;
        case 5:
            jsonFile[i].distric = update;
            break;
        case 5:
            jsonFile[i].state = update;
            break;
    }
    fs.writeFileSync('/home/admin1/channabasava/fellowshipJavascript/oops/addressBook/addressBook.json', JSON.stringify(jsonFile))
    console.log("Updated successfully")
    return jsonFile;
}
// adds a new person to the json file
addPerson = (jsonFile) => {
    let newPerson = {};
    newPerson.firstName = input.question("Enter the firstName :")
    newPerson.lastName = input.question("Enter the lastName:")
    newPerson.houseNo = input.question("Enter the houseNo :")
    newPerson.taluk = input.question("Enter the taluk :")
    newPerson.distric = input.question("Enter the distric :")
    newPerson.state = input.question("Enter the state :")

    jsonFile.push(newPerson)
    fs.writeFileSync("/home/admin1/channabasava/fellowshipJavascript/oops/addressBook/addressBook.json", JSON.stringify(jsonFile))
    console.log("ADDED SUCCESSFULLY...")
    return jsonFile;
}
// deletes a person from the json file
deletePerson = (jsonFile) => {
    let i = input.question("Enter the index number to delete the contact:")
    jsonFile.pop(i)
    fs.writeFileSync("/home/admin1/channabasava/fellowshipJavascript/oops/addressBook/addressBook.json", JSON.stringify(jsonFile))
    console.log("Deleted successfully....")
    return jsonFile
}
// searchs a person by the name
searchByName = (jsonFile) => {
    let Name = input.question("Enter the firstName or lastName:")
    jsonFile.forEach(nameInRecord => {
        if (nameInRecord.firstName.includes(Name) || nameInRecord.lastName.includes(Name))
            console.log(nameInRecord)
    });
}
//prints the person in json file
printFile = (jsonFile) => {
    jsonFile.forEach(person => {
        console.log(person)
    });
}
module.exports = { addressOperations }