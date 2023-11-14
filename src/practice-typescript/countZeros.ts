// You have a string that consist only of digits. You need to find how many zero digits ("0") are at the beginning of the given string.
// Input: A string (string), that consists of digits.
// Output: An integer (number).

function beginningZeros(a: string): number {
  let count = 0;
  while (a[count] == '0') {
    count++;
  }
  return count;
}
console.log(beginningZeros('00nn0n'));
