/****************************************************************************************
* @Execution : default node : cmd> factory.js
* @description :Prints the factoryDesign pattern design
* @overview : designPatterns
* @author : channabasava<channabasavabml@gmail.com>
* @version : 6.9.0
* @since : 13 November 2019
******************************************************************************************/
class Company {
    constructor(key) {
        this.key = key;
    }
}
class Pc extends Company {
    constructor(key, name) {
        super(key)
        this.name = name;
        this.type = "Product PC";
    }
}
class Laptop extends Company {
    constructor(key, name) {
        super(key)
        this.name = name;
        this.type = "Product Laptop";
    }
}

class CompanyServer extends Company {
    constructor(key, name) {
        super(key)
        this.name = name;
        this.type = "Product server";
    }
}

function computerFactory() {
    this.device = (key, name, type) => {
        switch (type) {
            case 1: return new Pc(key, name);
                break;
            case 2: return new Laptop(key, name);
                break;
            case 3: return new CompanyServer(key, name);
        }
    }
}

function say() {
    console.log(this.key + "The product " + this.name + " belongs " + this.type);
}

const cf = new computerFactory()
let factory = [];
factory.push(cf.device("C1-->", "Dell", 1));
factory.push(cf.device("P1-->", "hp", 2));
factory.push(cf.device("S1-->", "tablet", 2));

factory.forEach(ele => {
    say.call(ele);
})