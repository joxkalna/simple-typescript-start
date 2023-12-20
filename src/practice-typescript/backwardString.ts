export default function backwardWordString(word: string): string {
  return word.split('').reverse().join('');
}
console.log(backwardWordString('hello'));
