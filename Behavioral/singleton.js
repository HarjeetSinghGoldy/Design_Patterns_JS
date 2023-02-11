class Employee {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getSalary() {
        return this.salary;
    }
}

class EmployeeSingleton {
    constructor(firstName, lastName, salary) {
        if (!EmployeeSingleton.instance) {
            this.employee = new Employee(firstName, lastName, salary);
            EmployeeSingleton.instance = this;
        }
        return EmployeeSingleton.instance;
    }
    getEmployee() {
        return this.employee;
    }
}

const employee1 = new EmployeeSingleton('John', 'Doe', 50000);
const employee2 = new EmployeeSingleton('Jane', 'Doe', 60000);

console.log(employee1.getEmployee().getFullName());
// John Doe

console.log(employee2.getEmployee().getFullName());
// John Doe

console.log(employee1.getEmployee().getSalary());
// 50000

console.log(employee2.getEmployee().getSalary());
// 50000




// The Singleton pattern is useful in the following use cases:

// Database Connections: The Singleton pattern can be used to ensure that only one database connection is made at any given time. This ensures that the database is not overwhelmed with multiple connections and improves performance.

// Logging: The Singleton pattern can be used to ensure that only one instance of a logging object is created, even when multiple instances are created. This ensures that all logs are written to the same place and makes it easier to manage logs.

// Configuration: The Singleton pattern can be used to ensure that only one instance of a configuration object is created, even when multiple instances are created. This makes it easier to manage configuration settings and ensures that all parts of the application use the same configuration.

// Cache: The Singleton pattern can be used to ensure that only one instance of a cache object is created, even when multiple instances are created. This makes it easier to manage cache and ensures that all parts of the application use the same cache.

// State Management: The Singleton pattern can be used to manage global state in a web application. This makes it easier to manage state and ensures that all parts of the application use the same state.

// These are just a few examples of the many use cases for the Singleton pattern in software development. The Singleton pattern is useful whenever you need to ensure that only one instance of an object is created, even when multiple instances are created.