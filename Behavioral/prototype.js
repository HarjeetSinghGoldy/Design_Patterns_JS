class Employee {
    constructor(name, jobTitle, salary) {
        this.name = name;
        this.jobTitle = jobTitle;
        this.salary = salary;
    }

    clone() {
        return Object.assign({}, this);
    }
}


const john = new Employee("John Doe", "Manager", 100000);
const jane = john.clone();

jane.name = "Jane Doe";
jane.salary = 110000;

console.log(john); // "John Doe (Manager): 100000"
console.log(jane); // "Jane Doe (Manager): 110000"
