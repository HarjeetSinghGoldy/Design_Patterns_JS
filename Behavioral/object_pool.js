class Employee {
    constructor(name, title) {
      this.name = name;
      this.title = title;
      this.isAvailable = true;
    }
  
    work() {
      console.log(`${this.name} is now working`);
      this.isAvailable = false;
    }
  
    rest() {
      console.log(`${this.name} is now resting`);
      this.isAvailable = true;
    }
  }
  
  class EmployeePool {
    constructor() {
      this.pool = [];
    }
  
    acquire() {
      for (const employee of this.pool) {
        if (employee.isAvailable) {
          employee.work();
          return employee;
        }
      }
      return null;
    }
  
    release(employee) {
      employee.rest();
      this.pool.push(this.pool.shift(employee));

    }
  
    addEmployee(employee) {
      this.pool.push(employee);
    }
  }
  
  const pool = new EmployeePool();
  const employee1 = new Employee("John", "Developer")
  const employee2 = new Employee("Jane", "Tester")

  pool.addEmployee(employee1);
  pool.addEmployee(employee2);
  
  const john = pool.acquire();
  if (john) {
    // Use john for some work
    // ...
    pool.release(john);

    const jane = pool.acquire();
    pool.release(jane);

  } else {
    console.log("All employees are busy");
  }
  