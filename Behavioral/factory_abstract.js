class Employee {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
  }
  
  class Manager extends Employee {
    constructor(name) {
      super(name, "manager");
    }
  }
  
  class Engineer extends Employee {
    constructor(name) {
      super(name, "engineer");
    }
  }
  
  class EmployeeFactory {
    static createEmployee(name, type) {
      switch (type) {
        case "manager":
          return new Manager(name);
        case "engineer":
          return new Engineer(name);
        default:
          throw new Error("Invalid employee type");
      }
    }
  }
  
  const jane = EmployeeFactory.createEmployee("Jane Doe", "manager");
  console.log(jane instanceof Manager); // true
  
  const john = EmployeeFactory.createEmployee("John Doe", "engineer");
  console.log(john instanceof Engineer); // true
  