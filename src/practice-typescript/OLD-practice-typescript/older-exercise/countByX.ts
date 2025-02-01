//Create a function with two arguments that will return an array of the
// first n multiples of x.

// Assume both the given number and the number of times to count
// will be positive numbers greater than 0.

// Return the results as an array

export function countBy(x: number, n: number) {
  const arr = []
  for (let i = 1; i <= n; i++) arr.push(x * i)
  return arr
}
