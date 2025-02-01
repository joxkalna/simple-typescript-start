// When you factorialize a number, you are multiplying that number by each consecutive number minus one.
const factorialOf = integer => {
  let factorial = 1

  for (let i = 1; i <= integer; i++) {
    factorial *= i
    // 0! = 1
    // 1! = 1
    // 2! = 2 * 1
    // 3! = 3 * 2 * 1
    // 4! = 4 * 3 * 2 * 1
    // 5! = 5 * 4 * 3 * 2 * 1
  }
  return factorial
}

console.log(factorialOf(5))
