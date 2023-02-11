function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
  
  const employee1 = new Employee("John Doe", 35, 50000);
  const employee2 = new Employee("Jane Doe", 28, 45000);
  
  console.log(employee1.name); // Output: John Doe
  console.log(employee2.salary); // Output: 45000

  

//   The Constructor pattern can be used in the following use cases:

// Object creation: The Constructor pattern can be used to create objects with a blueprint. This allows for the creation of objects that have the same properties and methods, but with different values for each property.

// Object inheritance: The Constructor pattern can be used to create subclasses by using the prototype property of a constructor function. This allows for the creation of objects that inherit the properties and methods of their parent class.

// Object encapsulation: The Constructor pattern allows for the encapsulation of data within an object. The object's properties and methods can be defined within the constructor function and are only accessible through the object's instance.

// Object organization: The Constructor pattern provides a way to organize objects into classes, which can help to keep the code organized and easier to maintain.

// Object reuse: The Constructor pattern allows for the reuse of objects and their properties and methods. By creating objects with a blueprint, multiple instances of the same object can be created, each with its own unique values for properties.