const Employee= require ('./Employee');

//Manager class extends into Employee
class Manager extends Employee {
    //super constructor function to inherit from employee is name, id, and email
    constructor(name, id, email,officeNumber) {
        super(name, id, email)
        //new variable in addition to inherited ones
        this.officeNumber= officeNumber;
    }
    //getRole method to show Role
    getRole() {
        return 'Manager';
    }
    //getOfficeNumber method to show office number
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports= Manager;