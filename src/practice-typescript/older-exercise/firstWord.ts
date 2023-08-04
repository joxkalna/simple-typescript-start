export default function firstWord(findWord: string): string {
  return findWord.split(" ")[0];
}
console.log(firstWord("LOLZ mazing"));
