// 15: FIZZ BUZZ; 3: FIZZ; 5: BUZZ

const fizzBuzzBetweenTwoNumbers = (start: number, end: number) => {
  let num = start
  for (num; num <= end; num++) {
    if (num % 15 === 0) {
      console.log('FIZZ BUZZ')
    } else if (num % 3 === 0) {
      console.log('FIZZ')
    } else if (num % 5 === 0) {
      console.log('BUZZ')
    } else console.log(num)
  }
  return num
}
console.log('Fizzin between two numbers', fizzBuzzBetweenTwoNumbers(1, 15))

const fizzBuzz = (num: number): number => {
  for (let i = 0; i <= num; i++) {
    if (i % 15 === 0) {
      console.log('FIZZ BUZZ')
    } else if (i % 3 === 0) {
      console.log('FIZZ')
    } else if (i % 5 === 0) {
      console.log(i)
    } else console.log(i)
  }
  return num
}
console.log('am I fizzin', fizzBuzz(15))
