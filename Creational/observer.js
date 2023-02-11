class Employee {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.observers = [];
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getSalary() {
        return this.salary;
    }
    setSalary(salary) {
        this.salary = salary;
        this.notifyObservers();
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notifyObservers() {
        this.observers.forEach(observer => observer.update(this));
    }
}

class HRDepartment {
    update(employee) {
        console.log(`HR Department notified: ${employee.getFullName()}'s salary has been updated to ${employee.getSalary()}.`);
    }
}

class AccountingDepartment {
    update(employee) {
        console.log(`Accounting Department notified: ${employee.getFullName()}'s salary has been updated to ${employee.getSalary()}.`);
    }
}

const employee = new Employee('John', 'Doe', 50000);
const hrDepartment = new HRDepartment();
const accountingDepartment = new AccountingDepartment();

employee.addObserver(hrDepartment);
employee.addObserver(accountingDepartment);

employee.setSalary(60000);
// HR Department notified: John Doe's salary has been updated to 60000.
// Accounting Department notified: John Doe's salary has been updated to 60000.

employee.removeObserver(hrDepartment);

employee.setSalary(70000);
// Accounting Department notified: John Doe's salary has been updated to 70000.


// The Observer pattern is commonly used in the following use cases:

// Event handling: When an event occurs, multiple objects can be notified and take appropriate action. For example, in a GUI application, multiple objects can be notified when a button is clicked.

// Model-View-Controller (MVC) design pattern: The Observer pattern can be used to implement the communication between the Model and View components in the MVC design pattern. The Model component can notify the View component when data changes, allowing the View to update itself.

// Data binding: The Observer pattern can be used to bind data from a source to a target. For example, in a real-time data-driven application, changes in the source data can be automatically reflected in the target.

// Push vs Pull: The Observer pattern can be used to push data from the subject to the observer, instead of having the observer pull data from the subject.

// Logging and auditing: The Observer pattern can be used to log or audit changes to an object. For example, whenever an Employee's salary is updated, a log entry can be made with the new salary.

// Automated testing: The Observer pattern can be used to automate testing of an application. For example, when an object changes, a test observer can be notified and perform appropriate tests.