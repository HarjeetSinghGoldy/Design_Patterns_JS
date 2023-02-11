const EmployeeModule = (function() {
    let name, role, salary;
  
    const setName = function(newName) {
      name = newName;
    };
  
    const setRole = function(newRole) {
      role = newRole;
    };
  
    const setSalary = function(newSalary) {
      salary = newSalary;
    };
  
    const getName = function() {
      return name;
    };
  
    const getRole = function() {
      return role;
    };
  
    const getSalary = function() {
      return salary;
    };
  
    return {
      setName: setName,
      setRole: setRole,
      setSalary: setSalary,
      getName: getName,
      getRole: getRole,
      getSalary: getSalary
    };
  })();
  
  EmployeeModule.setName("John Doe");
  EmployeeModule.setRole("Manager");
  EmployeeModule.setSalary("$100,000");
  
  console.log(`Name: ${EmployeeModule.getName()}`);
  console.log(`Role: ${EmployeeModule.getRole()}`);
  console.log(`Salary: ${EmployeeModule.getSalary()}`);
  


//   The Module pattern is commonly used in the following use cases:

// Namespacing: The Module pattern can be used to organize code into logical units, making it easier to manage and maintain large codebases.

// Information hiding: The Module pattern can be used to hide the implementation details of a module, making it easier to change the implementation without affecting the rest of the system.

// Private properties and methods: The Module pattern can be used to create private properties and methods, which can only be accessed within the module. This can be useful for implementing encapsulation and information hiding.

// Singleton pattern: The Module pattern can be used to implement the Singleton pattern, allowing for only a single instance of a module to exist at any given time.

// Reusability: The Module pattern can be used to create reusable modules, making it easier to reuse code and reduce duplication.

// Decoupling: The Module pattern can be used to decouple different parts of a system, making it easier to maintain and change the system.