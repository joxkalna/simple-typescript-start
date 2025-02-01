function findTheLongestWord(word: string): string {
  //split the word
  const splitWord = word.split(' ')
  //add a variable for the longest word
  let longestWord = ''
  //for loop to loop over the length
  for (let i = 0; i < splitWord.length; i++) {
    //if statement if find assign the the longestWordVariable
    if (splitWord[i].length > longestWord.length) {
      longestWord += splitWord[i]
    }
  }
  //return longestWord length
  return longestWord
}

console.log(findTheLongestWord('I am very lo   oooooooong'))
