export default function solution(str: string): string {
  let splitString = str.split("");
  let reverseString = splitString.reverse();
  let joinArray = reverseString.join("");
  return joinArray;
}
