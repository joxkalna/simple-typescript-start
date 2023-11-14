const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

function countVowels(text: string): number {
  //count const
  let count = 0;
  // for of loop
  for (const char of text.toLowerCase()) {
    if (vowels.has(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels('Hel f'));
