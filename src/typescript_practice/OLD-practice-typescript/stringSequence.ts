export default function stringSequence(text: string): string {
  const leftWord = 'left'
  const rightWord = 'right'
  let newText = text
  if (text.includes(leftWord) || text.includes(rightWord)) {
    newText = newText.replaceAll(leftWord, 'tempword')
    newText = newText.replaceAll(rightWord, leftWord)
    newText = newText.replaceAll('tempword', rightWord)
  }
  return newText
}

console.log(stringSequence('right, right'))
console.log(stringSequence('right, left'))
console.log(stringSequence('left, left'))
console.log(stringSequence('left, right'))
