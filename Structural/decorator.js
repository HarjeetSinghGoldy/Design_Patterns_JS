class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
  }
  
  class BonusDecorator {
    constructor(employee) {
      this.employee = employee;
    }
  
    getSalary() {
      return this.employee.getSalary() + 2000;
    }
  }
  
  class CommissionDecorator {
    constructor(employee) {
      this.employee = employee;
    }
  
    getSalary() {
      return this.employee.getSalary() + 5000;
    }
  }
  
  const jane = new Employee("Jane Doe", 10000);
  console.log(`Salary without any additional compensation: $${jane.getSalary()}`);
  
  const bonusJane = new BonusDecorator(jane);
  console.log(`Salary with bonus: $${bonusJane.getSalary()}`);
  
  const commissionBonusJane = new CommissionDecorator(bonusJane);
  console.log(`Salary with bonus and commission: $${commissionBonusJane.getSalary()}`);
  

//   The Decorator pattern is useful in a variety of situations where you need to add new responsibilities to an existing class dynamically, such as:

// Adding new features to an existing class without changing its code.

// Applying multiple behaviors to an object in a flexible way.

// Decorating an object with multiple responsibilities without creating a complex inheritance structure.

// Adding additional functionality to objects in a modular way, without having to change the underlying class structure.

// Creating reusable and interchangeable components that can be combined in different ways to produce different results.

// These are just a few examples of the use cases of the Decorator pattern. The pattern can be applied in many other situations where you need to dynamically add new responsibilities to an existing class.