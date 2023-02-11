class Employee {
    constructor(name, role, salary) {
      this.name = name;
      this.role = role;
      this.salary = salary;
    }
  
    getName() {
      return this.name;
    }
  
    getRole() {
      return this.role;
    }
  
    getSalary() {
      return this.salary;
    }
  }
  
  class EmployeeFacade {
    constructor(employee) {
      this.employee = employee;
    }
  
    getEmployeeDetails() {
      return `Name: ${this.employee.getName()}, Role: ${this.employee.getRole()}, Salary: ${this.employee.getSalary()}`;
    }
  }
  
  const employee = new Employee("John Doe", "Manager", "$100,000");
  const employeeFacade = new EmployeeFacade(employee);
  
  console.log(employeeFacade.getEmployeeDetails());
  

//   The Facade pattern can be used in the following use cases:

// Simplifying complex APIs: The Facade pattern can be used to simplify a complex API by providing a simplified interface to access the functionality of the API.

// Abstracting underlying systems: The Facade pattern can be used to abstract the implementation details of an underlying system, making it easier to change the implementation without affecting the rest of the system.

// Providing a uniform interface: The Facade pattern can be used to provide a uniform interface to a set of related classes, making it easier to work with these classes as a single unit.

// Decoupling clients from complex systems: The Facade pattern can be used to decouple clients from complex systems, making it easier to change the implementation of the system without affecting the clients.

// Hiding implementation details: The Facade pattern can be used to hide the implementation details of a system, making it easier to change the implementation without affecting the rest of the system.

// Reducing coupling: The Facade pattern can be used to reduce the coupling between different parts of a system, making it easier to maintain and change the system.