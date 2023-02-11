class Employee {
    constructor(name, age, salary) {
      this.name = name;
      this.age = age;
      this.salary = salary;
    }
  }
  
  class AddEmployeeCommand {
    constructor(employee) {
      this.employee = employee;
    }
  
    execute() {
      employees.push(this.employee);
    }
  }
  
  class RemoveEmployeeCommand {
    constructor(employee) {
      this.employee = employee;
    }
  
    execute() {
      const index = employees.indexOf(this.employee);
      if (index !== -1) {
        employees.splice(index, 1);
      }
    }
  }
  
  const employees = [];
  
  const employee1 = new Employee("John Doe", 35, 50000);
  const employee2 = new Employee("Jane Doe", 28, 45000);
  const employee3 = new Employee("Jim Smith", 40, 55000);
  
  const addEmployeeCommand1 = new AddEmployeeCommand(employee1);
  const addEmployeeCommand2 = new AddEmployeeCommand(employee2);
  const addEmployeeCommand3 = new AddEmployeeCommand(employee3);
  
  addEmployeeCommand1.execute();
  addEmployeeCommand2.execute();
  addEmployeeCommand3.execute();
  
  console.log(employees);
  /* Output:
  [
    Employee { name: 'John Doe', age: 35, salary: 50000 },
    Employee { name: 'Jane Doe', age: 28, salary: 45000 },
    Employee { name: 'Jim Smith', age: 40, salary: 55000 }
  ]
  */
  
  const removeEmployeeCommand = new RemoveEmployeeCommand(employee2);
  removeEmployeeCommand.execute();
  
  console.log(employees);
  /* Output:
  [
    Employee { name: 'John Doe', age: 35, salary: 50000 },
    Employee { name: 'Jim Smith', age: 40, salary: 55000 }
  ]
  */
  


//   The Command pattern is useful in the following use cases:

// Undo/Redo functionality: The Command pattern can be used to implement undo and redo functionality in an application by allowing the commands to be executed and undone in a sequence.

// Batch processing: The Command pattern can be used to batch together a set of operations into a single command, making it easier to manage and execute a large number of related operations as a single unit.

// Remote method invocation: The Command pattern can be used to implement remote method invocations, where a remote service is requested to execute a command on behalf of the client.

// Macro recording: The Command pattern can be used to record a sequence of user actions as a macro, which can be played back later.

// Abstracting out processing: The Command pattern can be used to abstract out the processing of a request from the actual implementation, making it easier to change the implementation of the processing logic without affecting the rest of the system.

// Deferring processing: The Command pattern can be used to defer the processing of a request, allowing the processing to be executed at a later time or in a different context.