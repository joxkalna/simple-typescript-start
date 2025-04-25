// Problem 1: Print all even numbers from 2 to 20
// Hint: You can use the condition i <= 20 and increment i by 2 for each even number.

for (let i = 2; i <= 20; i += 2) {
  console.log(i)
}

// Problem 2: Find the sum of all numbers from 1 to 100 e.g 1 + 2 + 3 .. +99 + 100
// Hint: Use a variable to accumulate the sum inside the loop.

const callAllSum = () => {
  let sum = 0
  for (let i = 1; i <= 100; i++) {
    sum += i
  }
  return sum
}
console.log(callAllSum())

function callSum() {
  let sum = 0
  for (let i = 1; i <= 100; i++) {
    sum += i
  }
  return sum
}
console.log(callSum())

// Problem 3: Reverse a string using for loop
// Hint: You can loop from the end of the string to the beginning.

const reverseString = name => {
  let reversedString = '' // empty string to store the variable
  // i = name.length, that becomes i=3 -1; 2 is greater than or equal to 0; i-- becomes 2 as it decrements
  for (let i = name.length - 1; i >= 0; i--) {
    // empty string and we add the index of name[i] which in this cae is o
    reversedString += name[i]
  }
  return reversedString
}
console.log(reverseString('two'))

// Problem 4: Multiplication table of 5
// Hint: Multiply 5 by each number from 1 to 10.

const multipicationTable = () => {
  let table = []

  for (let i = 1; i <= 10; i++) {
    table.push(i * 5)
  }
  return table
}
console.log(multipicationTable())

// Problem 5:  Write a loop to generate an array of numbers from 1 to 50 that are divisible by 3.

const fizzSolution = () => {
  let arr = []
  for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0) {
      arr.push(i)
    }
  }
  return arr
}

console.log('I am fizzSoluton', fizzSolution())
// cound from 1 to 10
for (let i = 1; i <= 10; i++) {
  // console.log(i)
}
// Count dow from 10 to 1 using >
for (let i = 10; i > 0; i--) {
  // console.log(i)
}
