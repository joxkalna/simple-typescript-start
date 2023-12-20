export default function backwardString(text: string): string {
  return text
    .split(' ')
    .map((word) => [...word].reverse().join(''))
    .join(' ');
}
console.log(backwardString('hello sunshine'));
