function reverseNumbers(num) {
  let numString = String(num)
  return +numString.split('').reverse().join('')
}

console.log(reverseNumbers(123))
