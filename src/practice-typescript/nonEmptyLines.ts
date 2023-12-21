//regex using g for global to find new lines - /[^\r\n]+/g

function nonEmptyLines(text: string): number {
  const lines = text.split(/\r?\n|\r/); // split into array but using regex to match an empty line /n
  const countEmptyLines = lines.filter((line) => line.trim()).length; // we then filter the line and trim and check its length (allowing null)
  return countEmptyLines;
}

console.log(nonEmptyLines('one simple line\n'));
console.log(nonEmptyLines(''));
console.log(nonEmptyLines('\nonly one line\n            '));
console.log(
  nonEmptyLines(
    '\nLorem ipsum dolor sit amet,\n\nconsectetur adipiscing elit\nNam odio nisi, aliquam\n            ',
  ),
);
