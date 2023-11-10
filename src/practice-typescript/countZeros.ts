// You have a string that consist only of digits. You need to find how many zero digits ("0") are at the beginning of the given string.
// Input: A string (string), that consists of digits.
// Output: An integer (number).

function beginningZeros(a: string): number {
  // your code here
  //find zero in beginning of a string

  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === '0') {
      count++;
    } else {
      //exists straight away when a none 0 character is encountered
      break;
    }
  }
  return count;
}
console.log(beginningZeros('00nn00n'));
