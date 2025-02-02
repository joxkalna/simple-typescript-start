export default function solution(str: string): string {
  const splitString = str.split('')
  const reverseString = splitString.reverse()
  const joinArray = reverseString.join('')
  return joinArray
}
