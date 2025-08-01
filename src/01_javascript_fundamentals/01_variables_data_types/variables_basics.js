/**
 * JavaScript Variables and Data Types
 *
 * This file demonstrates the basics of JavaScript variables and data types.
 */

// Variable declarations
// ---------------------

// Using let (block-scoped, can be reassigned)
let name = 'John'
name = 'Jane' // Reassignment is allowed

// Using const (block-scoped, cannot be reassigned)
const age = 30
// age = 31; // This would cause an error: Assignment to constant variable

// Using var (function-scoped, older way, generally avoided in modern JS)
var isStudent = true

// Primitive Data Types
// -------------------

// String
const greeting = 'Hello, world!'
const template = `My name is ${name}` // Template literal (ES6)

// Number
const integer = 42
const float = 3.14
const infinity = Infinity
const notANumber = NaN

// Boolean
const isActive = true
const isComplete = false

// Undefined (variable declared but not assigned a value)
let undefinedVar
console.log(undefinedVar) // undefined

// Null (intentional absence of any value)
const emptyValue = null

// Symbol (unique and immutable primitive value)
const uniqueId = Symbol('id')

// BigInt (for integers larger than Number can represent)
const bigNumber = 9007199254740991n

// Reference Data Types
// -------------------

// Object
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  greet() {
    return `Hello, I'm ${this.firstName}`
  },
}

// Array
const colors = ['red', 'green', 'blue']
const mixed = [1, 'two', true, { key: 'value' }]

// Function
function add(a, b) {
  return a + b
}

const subtract = function (a, b) {
  return a - b
}

const multiply = (a, b) => a * b

// Date
const today = new Date()

// Type Coercion
// ------------
console.log('5' + 5) // '55' (string concatenation)
console.log('5' - 5) // 0 (numeric subtraction)
console.log(5 + true) // 6 (true is coerced to 1)

// Type Checking
// ------------
console.log(typeof 'hello') // 'string'
console.log(typeof 42) // 'number'
console.log(typeof true) // 'boolean'
console.log(typeof undefined) // 'undefined'
console.log(typeof null) // 'object' (this is a known JavaScript quirk)
console.log(typeof {}) // 'object'
console.log(typeof []) // 'object' (arrays are objects in JavaScript)
/* eslint-disable */
console.log(typeof function() {}) // 'function'
/* eslint-enable */

// Exercise 1: Create variables for a user profile
// TODO: Create variables for firstName, lastName, email, isSubscribed, and subscriptionLevel

// Exercise 2: Create an object representing a book
// TODO: Create a book object with title, author, year, and a method to get its age

// Exercise 3: Demonstrate type coercion
// TODO: Write examples showing different type coercion scenarios