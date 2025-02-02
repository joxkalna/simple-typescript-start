/**
 * @param {number} input
 * @return {boolean}
 */

const isPalidorm = input => {
  if (input < 0) return false // palidorm cannot be negative
  let numString = input.toString() //need to convert to string
  let reverseString = numString.split('').reverse().join('')
  return numString === reverseString
}

console.log(isPalidorm(121))
