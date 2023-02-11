class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

class EmployeeDetails {
    constructor(employee) {
        this.employee = employee;
    }
}

class EmployeeName extends EmployeeDetails {
    getDetails() {
        console.log(`Employee Name: ${this.employee.name}`);
    }
}

class EmployeeSalary extends EmployeeDetails {
    getDetails() {
        console.log(`Employee Salary: ${this.employee.salary}`);
    }
}

const employee = new Employee("John Doe", 50000);
const employeeName = new EmployeeName(employee);
const employeeSalary = new EmployeeSalary(employee);

employeeName.getDetails();
employeeSalary.getDetails();


// The Bridge pattern can be useful in several use cases, including:

// Abstraction and Implementation separation: When you want to separate the abstraction from its implementation so that the two can evolve independently.

// Multiple Implementations: When you have multiple implementations of the same abstraction, and you want to avoid the "Cartesian product" complexity that would result from using inheritance.

// Decoupling an abstraction from its implementation so that the two can vary independently.

// Avoiding permanent binding between an abstraction and its implementation and to allow the selection of an implementation at runtime.

// Changing an implementation during the lifetime of a program without affecting the client code.

// Hiding the implementation details of a class from its clients, while still providing access to the implementation through a limited interface.

// Maintaining compatibility with a legacy system while gradually moving to a new system.

// Developing reusable class libraries, where the implementation can be selected at runtime.