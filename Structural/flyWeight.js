class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
}

class EmployeeFactory {
    constructor() {
        this.employees = [];
    }

    getEmployee(name, department) {
        let employee = this.employees.find((employee) => employee.name === name && employee.department === department);

        if (!employee) {
            employee = new Employee(name, department);
            this.employees.push(employee);
        }

        return employee;
    }

    getEmployeeCount() {
        return this.employees.length;
    }
}

const factory = new EmployeeFactory();

const emp1 = factory.getEmployee("John Doe", "Sales");
const emp2 = factory.getEmployee("Jane Doe", "Marketing");
const emp3 = factory.getEmployee("John Doe", "Sales");

console.log(factory.getEmployeeCount()); // Output: 2


// The Flyweight pattern is a design pattern that is used to minimize memory usage or computational expenses by sharing as much data as possible with other similar objects. In an employee class use case, you can use the Flyweight pattern to optimize the storage of employee information.

// Consider a scenario where you have a large number of employees and you need to store their information, such as their name, title, and department. Without using the Flyweight pattern, you would create a separate object for each employee and store all of their information in that object. This approach can quickly consume a lot of memory, especially if you have a large number of employees.

// To implement the Flyweight pattern in this scenario, you can create two classes: Employee and EmployeeFactory. The Employee class would contain the intrinsic information that is unique to each employee, such as their name and title. The EmployeeFactory class would contain the extrinsic information that can be shared among multiple employees, such as their department.

// When you create a new employee, you would use the EmployeeFactory class to get an instance of the employee's department. If the department already exists, the EmployeeFactory class would return a reference to the existing department. If the department does not exist, the EmployeeFactory class would create a new instance and store it for future use. The Employee class would then be created with a reference to the department object.

// This approach allows you to share the department information among multiple employees, reducing the amount of memory used to store this information.

// Flyweight pattern:

// Games: The Flyweight pattern can be used in game development to store a large number of game objects, such as characters, weapons, and maps. By sharing information between similar objects, you can reduce the amount of memory used to store the objects and improve performance.
// Document editing: In a document editing application, you can use the Flyweight pattern to store font and style information for a large number of text objects. By sharing this information, you can reduce the memory footprint of the application and improve performance.