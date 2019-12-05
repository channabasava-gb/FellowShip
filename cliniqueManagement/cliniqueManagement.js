/**
* @filename :clinic.js
* @module: oopsConcepts Program0
* @author: channabasava <channabasavabml@gmai.com>
* @version:10.16.3
* @since:13-Nov-2019
*/
var input = require('readline-sync')
var fs = require('fs');
/**
* @param patient @param doctor store information and manage list
*/
function clinique() {
    fs.readFile('/home/admin1/channabasava/fellowshipJavascript/oops/cliniqueManagement/clinique.json', function (err, data) {
        if (err) throw err
        /**
        * parse data using json
        */
        var clinique = JSON.parse(data);
        do {
            console.log("1.ADD Appointment\n2.PRINTLIST\n3.SEARCH\n4.EXIT");
            var option = input.questionInt('Enter the option:');
            switch (parseInt(option)) {
                case 1:
                    /**
                    * print list of doctors available
                    */
                    console.log("*Doctors Available*");
                    console.log(clinique.Doctors);
                    let newPatients = {};
                    newPatients.name = input.questionInt('Patient Name: ');
                    newPatients.ID = input.questionInt('Patient ID: ');
                    newPatients.mobNo = input.questionInt('Patient mobile number: ');
                    newPatients.Age = input.questionInt('Patient age: ');
                    newPatients.Appointed_To = input.questionInt('Patient appointed: ');
                    /**
                    * push each value into the json array
                    */
                    clinique.Patients.push(
                        {
                            "name": name,
                            "ID": ID,
                            "mobNo": mobNo,
                            "Age": Age,
                            "Appointed_To": Appointed_To
                        })
                    console.log("Appointment Added Successfully...");
                    /**
                    * write the file into json
                    */
                    fs.writeFile('/home/admin1/channabasava/fellowshipJavascript/oops/cliniqueManagement/clinique.json', JSON.stringify(clinique), function (err) {
                        if (err) throw err
                    })
                    break;
                case 2:
                    /**
                    * print whole list from clinique object
                    */
                    console.log(clinique);
                    break;
                case 3:
                    console.log("****SEARCH LIST******");
                    console.log("1.Doctor\n2.Patient");
                    var option2 = input.questionInt('Enter Option: ');
                    if (option2 == 1) {
                        console.log("1.Search by Name\n2.Search by ID\n3.Search by Specialization\n4.Search by Availability");
                        var option3 = input.questionInt('Enter option: ');
                        if (option3 == 1) {
                            var i = input.questionInt('Name: ');
                            for (var key in clinique.Doctors) {
                                if (clinique.Doctors[key].name == i) {
                                    console.log("****Doctor Info****");
                                    console.log(clinique.Doctors[key]);
                                }
                            }
                        }
                        else if (option3 == 2) {
                            var i = input.questionInt('ID: ');
                            /**
                            * find key in the doctor object we want to search
                            */
                            for (var key in clinique.Doctors) {
                                if (clinique.Doctors[key].ID == i) {
                                    console.log("****Doctor's Info****");
                                    console.log(clinique.Doctors[key]);
                                }
                            }
                        }
                        else if (option3 == 3) {
                            var i = input.questionInt('Specialization: ');
                            /**
                            * find key in the doctor object we want to search
                            */
                            for (var key in clinique.Doctors) {
                                if (clinique.Doctors[key].Specialization == i) {
                                    console.log("****Doctor's Info****");
                                    console.log(clinique.Doctors[key]);
                                }
                            }
                        }
                        else if (option3 == 4) {
                            var i = input.questionInt('Availability: ');
                            /**
                            * find key in the doctor object we want to search
                            */
                            for (var key in clinique.Doctors) {
                                if (clinique.Doctors[key].Availability == i) {
                                    console.log("****Doctor's Info****");
                                    console.log(clinique.Doctors[key]);
                                }
                            }
                        }
                    }
                    if (option2 == 2) {
                        console.log("1.Search by Name\n2.Search by ID\n3.Search by mobNo\n4.Search by Age");
                        var option4 = input.questionInt('Enter option: ');
                        if (option4 == 1) {
                            var i = input.questionInt('Name: ');
                            for (var key in clinique.Patients) {
                                if (clinique.Patients[key].Name == i) {
                                    //show info of particular patient using name
                                    console.log("****Patients Info****");
                                    console.log(clinique.Patients[key]);
                                }
                            }
                        }
                        else if (option4 == 2) {
                            var i = input.questionInt('ID: ');
                            for (var key in clinique.Patients) {
                                if (clinique.Patients[key].ID == i) {
                                    /**
                                    * show info of particular patient using ID
                                    */
                                    console.log("****Patients Info****");
                                    console.log(clinique.Patients[key]);
                                }
                            }
                        }
                        else if (option4 == 3) {
                            var i = input.questionInt('mobNo: ');
                            for (var key in clinique.Patients) {
                                if (clinique.Patients[key].mobNo == i) {
                                    /**
                                    * show info of patient through mobile number
                                    */
                                    console.log("****Patients Info****");
                                    console.log(clinique.Patients[key]);
                                }
                            }
                        }
                        else if (option4 == 4) {
                            var i = input.questionInt('Age: ');
                            for (var key in clinique.Patients) {
                                if (clinique.Patients[key].Age == i) {
                                    console.log("****Patients Info****");
                                    console.log(clinique.Patients[key]);
                                }
                            }
                        }
                    }
                    break;
                case 4:
                    console.log("ThankYou!");
                    break;
                default:
                    console.log("Plz enter valid option!!");
            }
        } while (option != 4);
    })
} clinique();