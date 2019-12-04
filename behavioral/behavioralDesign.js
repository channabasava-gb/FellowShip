class person {
    constructor(Employee, address) {
        this.Employee = Employee;
        this.address = address;
    }

    dispInfo() {
        console.log("Employee name is--> " + this.Employee + "--> Employee address is-->" + this.address);
    }
}
class Employee {
    constructor(name) {
        this.name = name;
    }
    setName(nm) {
        this.name = nm;
    }
    getName() {
        this.name;
    }
    info(address) {
        this.address = address;
        let cr = new person(this.name, this.address);
        cr.dispInfo();
    }
}
let p1 = new Employee();
p1.setName("manojkumar");
p1.info("bommanahalli");

