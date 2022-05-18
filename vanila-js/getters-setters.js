// 1. Using set() && get() in classes

class Employee {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.role;
  }
  get getRole() {
    return this._role;
  }
  set setRole(roleName) {
    const newRoleName = roleName.trim();
    if (!newRoleName) {
      return console.error("Role cannot be empty");
    } else return (this._role = newRoleName);
  }
}

const newEmployee = new Employee("Richard", "Ross");
console.log(newEmployee.firstName, newEmployee.lastName, newEmployee.getRole);

newEmployee.setRole = ""; //cannot be empty
console.log(newEmployee.firstName, newEmployee.lastName, newEmployee.getRole);

newEmployee.setRole = "Engineer"; //set employee role
console.log(newEmployee.firstName, newEmployee.lastName, newEmployee.getRole);

newEmployee.setRole = "Accountant"; // Changed role
console.log(newEmployee.firstName, newEmployee.lastName, newEmployee.getRole);
