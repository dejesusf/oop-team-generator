const Employee= require ('./Employee');

//Manager class extends into Employee
class Manager extends Employee {
    //super constructor function to inherit from employee is name, id, and email
    constructor(name, id, email,officeNumber) {
        super(name, id, email)
        //new variable in addition to inherited ones
        this.officeNumber= officeNumber;
    }
    getRole() {
        console.log('Manager');
        return 'Manager';
    }
    getOfficeNumber() {
        console.log(this.officeNumber);
        return this.officeNumber;
    }
}

module.exports= Manager;