export default function backwardStringByWord(text: string): string {
  let reverseString = text
    .split(/\b/)
    .map((word) =>
      word
        .split(/(?=\S)/)
        .reverse()
        .join(''),
    )
    .join('');

  return reverseString;
}
console.log(backwardStringByWord('hello world'));
