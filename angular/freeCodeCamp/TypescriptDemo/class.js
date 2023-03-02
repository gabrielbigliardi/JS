"use strict";
class Employee {
}
let john = new Employee();
john.id = 1;
john.name = 'John Shmoe';
john.address = 'Highway, 2';
console.log(john);
// ---------------- com constructor ------------------
class Employee2 {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        return `${this.name} lives in: ${this.address}.`;
    }
}
let jack = new Employee2(2, 'Jack Black', 'Freeway, 34');
console.log(jack.getNameWithAddress());
