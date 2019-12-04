/****************************************************************************************
* @Execution : default node : cmd> factory.js
* @description :Prints the factory pattern design
* @overview : designPatterns
* @author : channabasava<channabasavabml@gmail.com>
* @version : 6.9.0
* @since : 13 November 2019
******************************************************************************************/
function Employee(name, id, salary) {
    this.name = name;
    this.id = id;
    this.salary = salary;

    this.say = () => {
        console.log("Employee name is-->" + this.name + "-->Employee id number is-->" + this.id + "-->Employee salary is-->" + this.salary);
    }
}
function EmployeePrototype(proto) {
    this.proto = proto;
    this.clone = function () {
        let emp = new Employee();
        emp.name = proto.name;
        emp.id = proto.id;
        emp.salary = proto.salary;
        return emp;
    };
}
function run() {
    let proto = new Employee("ManojKumar", 111, 20000)
    let prototype = new EmployeePrototype(proto)
    let emp = prototype.clone()
    emp.say();
}
run();
