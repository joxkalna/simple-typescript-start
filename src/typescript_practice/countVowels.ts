const vowels = new Set(['a', 'e', 'i', 'o', 'u'])

function countVowels(text: string): number {
  let count = 0

  for (const char of text.toLowerCase()) {
    if (vowels.has(char)) {
      count++
    }
  }

  return count
}

console.log(countVowels('Hello a'))
