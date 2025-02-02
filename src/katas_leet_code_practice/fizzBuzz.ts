export default function fizzBuzz(start: number, end: number): number {
  let num = start

  for (num; num <= end; num++) {
    // want to display FIZZ  BUZZ in console log.
    if (num % 15 === 0) console.log('FIZZ BUZZ')
    if (num % 3 === 0) console.log('FIZZ')
    if (num % 5 === 0) console.log('BUZZ')
    else console.log(num)
  }
  return num //returns last number in the foor loop as otherwise returns undefined;
}
console.log(fizzBuzz(1, 6))
