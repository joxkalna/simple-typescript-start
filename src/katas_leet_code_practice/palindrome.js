/**
 * @param {number} input
 * @return {boolean}
 */

const isPalidorm = num => {
  if (num < 0) return false
  let numStr = num.toString()
  let numReverse = numStr.split('').reverse().join('')
  return numReverse === num
}
console.log(isPalidorm(1234))
