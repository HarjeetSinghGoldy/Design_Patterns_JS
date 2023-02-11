class Developer {
    constructor() {
        this.role = 'developer';
        this.skills = ['coding', 'debugging'];
    }
    work() {
        console.log(`Working as a ${this.role}. Skills: ${this.skills.join(', ')}`);
    }
}

class Designer {
    constructor() {
        this.role = 'designer';
        this.skills = ['designing', 'prototyping'];
    }
    work() {
        console.log(`Working as a ${this.role}. Skills: ${this.skills.join(', ')}`);
    }
}

class Manager {
    constructor() {
        this.role = 'manager';
        this.skills = ['managing', 'coordinating'];
    }
    work() {
        console.log(`Working as a ${this.role}. Skills: ${this.skills.join(', ')}`);
    }
}


function EmployeeFactory(role) {
    switch(role) {
        case 'developer':
            return new Developer();
        case 'designer':
            return new Designer();
        case 'manager':
            return new Manager();
        default:
            throw new Error('Invalid employee role');
    }
}

const developer = EmployeeFactory('developer');
const designer = EmployeeFactory('designer');
const manager = EmployeeFactory('manager');

developer.work();
// Working as a developer. Skills: coding, debugging

designer.work();
// Working as a designer. Skills: designing, prototyping

manager.work();
// Working as a manager. Skills: managing, coordinating




// The Factory pattern is commonly used in software development to create objects in a dynamic and flexible way. Some of the main use cases of the Factory pattern are:

// Object creation: The Factory pattern is useful when you need to create objects based on a specific set of conditions or input parameters. For example, you might need to create different types of employees, vehicles, or animals based on the data received from an API.

// Abstraction: The Factory pattern allows you to hide the implementation details of the object creation process and provide a simplified interface to the client code. This improves the maintainability and flexibility of your code, as you can change the underlying object creation process without affecting the client code.

// Reusability: The Factory pattern allows you to create multiple objects from the same blueprint, making it easy to reuse code and reduce duplication.

// Testing: The Factory pattern makes it easier to write automated tests for your code. You can create mock objects using the Factory pattern and use them to test different scenarios without affecting the real objects.

// Loose coupling: The Factory pattern promotes loose coupling between the client code and the objects it creates. This means that the client code is not tightly bound to a specific implementation of an object and can use different objects interchangeably, making your code more flexible and scalable.

// In conclusion, the Factory pattern is a valuable tool in your software development toolkit and can be used in a variety of scenarios to improve the structure, flexibility, and maintainability of your code.