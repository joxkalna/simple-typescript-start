export default function backwardStringByWord(text: string): string {
  return text
    .split(' ')
    .map((word) => [...word].reverse().join(''))
    .join(' ');
}
console.log(backwardStringByWord('test me all day long'));
