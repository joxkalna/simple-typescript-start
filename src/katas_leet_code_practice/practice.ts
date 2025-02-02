/* eslint-disable no-console */

// repeat the word how many times I am asking for it;
// input a song and number of times;
function repeatThisWord(word: string, repeat: number): any {
  let wordThatIsRepeated = ''

  for (let i = 0; i <= repeat; i++) {
    wordThatIsRepeated += word
  }
  return wordThatIsRepeated
}

console.log(repeatThisWord('la', 3))
