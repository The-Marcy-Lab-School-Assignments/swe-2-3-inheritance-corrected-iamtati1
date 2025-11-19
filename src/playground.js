console.log('Put your code here!');

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        return `${this.name} earns $${this.salary}`;
    }
}
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary)
        this.department = department;
    }

    getDetails() {
        return (`The employee's name is ${this.name}, the employee's salary is ${this.salary}, and their department info is ${this.department}.`)
    }
}

const mgr = new Manager("Alice", 80000, "Engineering");
console.log(mgr.getDetails());