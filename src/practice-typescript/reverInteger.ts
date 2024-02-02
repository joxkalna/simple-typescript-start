export default function reverseDigits(num: number): number {
  //to reverse a number we need to conver it to string, then split individually with '' , reverse and then join it back.
  let strNumber = parseInt(num.toString().split('').reverse().join(''));
  return num < 0 ? -strNumber : strNumber;
  //   return parseInt(strNumber) * Math.sign(num); //math.sign indicates if its positive or negative
}
console.log(reverseDigits(-123));
console.log(reverseDigits(123));
