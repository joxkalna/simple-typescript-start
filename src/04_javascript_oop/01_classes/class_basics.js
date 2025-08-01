/**
 * JavaScript Classes
 *
 * ES6 introduced class syntax to JavaScript, providing a clearer way to create
 * objects and handle inheritance. Under the hood, it still uses prototypal inheritance.
 */

// Basic class definition
class Person {
  // Constructor method
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  // Instance method
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`
  }

  // Static method (called on the class itself, not instances)
  static createAnonymous() {
    return new Person('Anonymous', 0)
  }
}

// Creating instances
const person1 = new Person('Alice', 28)
const person2 = new Person('Bob', 32)

console.log(person1.greet()) // Hello, my name is Alice and I am 28 years old.
console.log(person2.greet()) // Hello, my name is Bob and I am 32 years old.

// Using a static method
const anonymous = Person.createAnonymous()
console.log(anonymous.greet()) // Hello, my name is Anonymous and I am 0 years old.

// Exercise 1: Create a BankAccount class
// TODO: Create a BankAccount class with:
// - Properties: accountNumber, owner, balance
// - Methods: deposit(amount), withdraw(amount), getBalance()
// - Make sure withdraw() doesn't allow withdrawing more than the balance

// Exercise 2: Create a Student class that extends Person
// TODO: Create a Student class that inherits from Person and adds:
// - Properties: studentId, major
// - Methods: study(subject), override greet() to include student info

// Exercise 3: Implement private fields using # syntax (ES2020+)
// TODO: Modify the BankAccount class to make the balance a private field
// Hint: Use #balance instead of this.balance
