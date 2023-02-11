class Employee {
    constructor(name, title, department) {
      this.name = name;
      this.title = title;
      this.department = department;
    }
  
    getName() {
      return this.name;
    }
  
    getTitle() {
      return this.title;
    }
  
    getDepartment() {
      return this.department;
    }
  }
  
  class EmployeeProxy {
    constructor(employee, role) {
      this.employee = employee;
      this.role = role;
    }
  
    getName() {
      return this.employee.getName();
    }
  
    getTitle() {
      if (this.role === "admin") {
        return this.employee.getTitle();
      } else {
        return "Access Denied";
      }
    }
  
    getDepartment() {
      if (this.role === "admin") {
        return this.employee.getDepartment();
      } else {
        return "Access Denied";
      }
    }
  }
  
  const employee = new Employee("John Doe", "Manager", "Marketing");
  const proxy = new EmployeeProxy(employee, "user");
  
  console.log(proxy.getName()); // Output: John Doe
  console.log(proxy.getTitle()); // Output: Access Denied
  console.log(proxy.getDepartment()); // Output: Access Denied


//   Proxy pattern:

//   Access control: The Proxy pattern can be used to control access to sensitive information, such as financial records or confidential documents. By using a proxy object, you can limit access to the information based on the user's role or permissions.
//   Remote access: The Proxy pattern can be used to access remote resources, such as web services or databases. The proxy object can provide a local interface to the remote resource and manage the communication between the client and the resource.
//   Caching: The Proxy pattern can be used to implement caching, where the proxy object stores a local copy of frequently accessed data to improve performance.  