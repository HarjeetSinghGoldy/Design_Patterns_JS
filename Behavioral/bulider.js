class Employee {
    constructor(builder) {
      this.name = builder.name;
      this.type = builder.type;
      this.email = builder.email;
      this.address = builder.address;
      this.phone = builder.phone;
    }
  }
  
  class EmployeeBuilder {
    constructor(name) {
      this.name = name;
    }
  
    setType(type) {
      this.type = type;
      return this;
    }
  
    setEmail(email) {
      this.email = email;
      return this;
    }
  
    setAddress(address) {
      this.address = address;
      return this;
    }
  
    setPhone(phone) {
      this.phone = phone;
      return this;
    }
  
    build() {
      return new Employee(this);
    }
  }
  
  const john = new EmployeeBuilder("John Doe")
    .setType("engineer")
    .setEmail("john.doe@example.com")
    .setAddress("123 Main St.")
    .setPhone("555-555-1212")
    .build();
  
  console.log(john);
  /*
  Employee {
    name: 'John Doe',
    type: 'engineer',
    email: 'john.doe@example.com',
    address: '123 Main St.',
    phone: '555-555-1212'
  }
  */
  


//   The Builder pattern is commonly used in situations where:

// The construction process for an object is complex and prone to error. The Builder pattern helps to manage the construction process by breaking it down into smaller, modular steps.

// An object has a large number of properties, making its constructor unwieldy and hard to read. The Builder pattern provides a clean, readable way to construct such objects by using a separate builder class with setter methods for each property.

// It's necessary to create different variations of an object. The Builder pattern makes it easy to change the construction process by providing a new builder class with different implementation of the setter methods.

// You need to enforce a particular order of property assignment. The Builder pattern allows you to enforce the order of property assignment by calling the setter methods in a specific sequence.

// You want to separate the concerns of object creation from its representation. The Builder pattern provides a way to encapsulate the construction process in a separate class, making it easier to maintain the object's representation and the construction process independently.