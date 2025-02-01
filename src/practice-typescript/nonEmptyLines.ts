import { match } from 'assert'
// !== checks wheather the values on both sides are not equal
// regex - /\r?\n|\r/
function nonEmptyLines(text: string): number {
  const matchNewLine = text.split(/\r?\n|\r/)
  console.log(matchNewLine)
  //count how many empty lines are being removed from the string
  const trimNewLine = matchNewLine.filter(line => line.trim() !== '').length //filters out from string elements that are falsy (empty strings are considered falsy).
  // .length gives count of non-empty and non-white spaces in string;
  // by adding !== '' inequality check that the trimmed version of line has any non-white space.  It checks is not euqal to an empty string
  return trimNewLine
}

console.log(nonEmptyLines('one simple line\n')) //1
console.log(nonEmptyLines('')) //0
console.log(nonEmptyLines('\nonly one line\n            ')) //2
console.log(
  nonEmptyLines(
    '\nLorem ipsum dolor sit amet,\n\nconsectetur adipiscing elit\nNam odio nisi, aliquam\n            ',
  ),
) // 3
