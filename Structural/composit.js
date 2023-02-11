class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        this.subordinates = [];
    }

    add(employee) {
        this.subordinates.push(employee);
    }

    remove(employee) {
        const index = this.subordinates.indexOf(employee);
        this.subordinates.splice(index, 1);
    }

    getSubordinates() {
        return this.subordinates;
    }

    getDetails() {
        console.log(`Employee Name: ${this.name}`);
        console.log(`Employee Salary: ${this.salary}`);
    }
}

const CEO = new Employee("John Doe", 100000);
const headSales = new Employee("Jane Doe", 75000);
const headMarketing = new Employee("Jim Doe", 70000);
const salesExecutive1 = new Employee("Sarah Doe", 50000);
const salesExecutive2 = new Employee("Steve Doe", 50000);
const marketingExecutive1 = new Employee("Mike Doe", 50000);
const marketingExecutive2 = new Employee("Marry Doe", 50000);

CEO.add(headSales);
CEO.add(headMarketing);

headSales.add(salesExecutive1);
headSales.add(salesExecutive2);

headMarketing.add(marketingExecutive1);
headMarketing.add(marketingExecutive2);

const printEmployee = (employee) => {
    employee.getDetails();
    employee.getSubordinates().forEach(printEmployee);
};

printEmployee(CEO);



// The Composite pattern is useful in several use cases, including:

// Representing a part-whole hierarchy: When you have an object structure that consists of objects that can be either simple or complex, and you want to treat both types of objects uniformly.

// Building a tree-like structure: When you need to create a tree-like structure where some nodes are composed of other nodes.

// Creating a recursive composition: When you need to create a recursive composition of objects, where an object can contain other objects, which can contain even more objects, and so on.

// Building a flexible object structure: When you need to build an object structure that can change dynamically, based on the needs of your application.

// Simplifying object interations: When you want to simplify the iteration over a complex object structure, so that you can perform the same operation on both simple and complex objects in the structure.

// Building user interfaces: When you need to build a user interface that consists of nested and overlapping elements.

// Simplifying the code by eliminating the need for type checking and casting, as all objects in the composite structure can be treated uniformly.