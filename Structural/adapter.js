class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class EmployeeAdapter {
    constructor(employee) {
        this.employee = employee;
    }
    getFullName() {
        return this.employee.getFullName();
    }
    getEmail() {
        return `${this.employee.firstName}.${this.employee.lastName}@company.com`;
    }
}

const employee = new Employee('John', 'Doe');
const employeeAdapter = new EmployeeAdapter(employee);

console.log(employeeAdapter.getFullName());
// John Doe

console.log(employeeAdapter.getEmail());
// John.Doe@company.com



// The Adapter pattern is useful in a number of different use cases, including:

// Integrating with legacy systems: You may have an existing system that you want to integrate with a new system, but the two systems have different interfaces or protocols. The Adapter pattern can be used to adapt the new system to the interface or protocol of the legacy system, allowing for seamless integration.

// Reusing existing code: You may have an existing codebase that you want to reuse, but it uses a different interface or implementation than what you need. The Adapter pattern can be used to adapt the existing code to the interface or implementation that you need, allowing you to reuse the code without making changes to the original code.

// Multiple client support: You may have multiple clients that need to use a shared resource, but each client has different requirements or interfaces. The Adapter pattern can be used to adapt the shared resource to the interface or requirements of each client, allowing each client to use the resource in a way that makes sense for them.

// Supporting multiple platforms: You may be developing an application that needs to run on multiple platforms, but each platform has different interfaces or implementations. The Adapter pattern can be used to adapt the application to the interfaces or implementations of each platform, allowing the application to run seamlessly on each platform.

// Polymorphism: The Adapter pattern can be used to allow objects of different types to be used interchangeably, as long as they have the same interface. This allows for greater flexibility and code reuse.


class LegacyCalculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }
}


console.log(legacyCalculator.add(2, 3));


class NewCalculator {
    calculate(operator, a, b) {
        switch (operator) {
            case "add":
                return a + b;
            case "subtract":
                return a - b;
            case "multiply":
                return a * b;
            case "divide":
                return a / b;
            default:
                throw new Error(`Invalid operator: ${operator}`);
        }
    }
}

class CalculatorAdapter {
    constructor(calculator) {
        this.calculator = calculator;
    }

    add(a, b) {
        return this.calculator.calculate("add", a, b);
    }

    subtract(a, b) {
        return this.calculator.calculate("subtract", a, b);
    }

    multiply(a, b) {
        return this.calculator.calculate("multiply", a, b);
    }

    divide(a, b) {
        return this.calculator.calculate("divide", a, b);
    }
}

const legacyCalculator = new LegacyCalculator();
const newCalculator = new NewCalculator();
const calculatorAdapter = new CalculatorAdapter(newCalculator);

console.log(legacyCalculator.add(2, 3));
console.log(calculatorAdapter.add(2, 3));