/*
Why reduce?
reduce iterates through the array and compares the current word's length with the longest found so far
It's also a functional approach, which might align better with modern JavaScript practices.
Why not for loop?
The for loop works perfectly fine here, but you have to manually manage the variable longestWord, 
while reduce automatically handles the accumulation of the longest word in a single, functional step.
accumulation refers to the process of progressively building up a single value as the array is iterated over.
'' - is to start as empty value or neutral value to look for longest 
*/

function findLongestWord(sentence: string): string {
  //create a array to split up the sentence;
  const splitArr = sentence.split(' ')
  //create an empty let to assing the word to;
  let longestWord = ''
  //create a for loop to identify the lenght;
  for (let i = 0; i < splitArr.length; i++) {
    if (splitArr[i].length > longestWord.length) {
      longestWord = splitArr[i]
    }
  }
  //return the longest word
  return longestWord
}

console.log(findLongestWord('a bb ccc'))

const findLongesWithReduce = (findWord: string): string => {
  return findWord
    .split(' ')
    .reduce(
      (current, longest) =>
        current.length > longest.length ? current : longest,
      '',
    )
}
console.log(findLongesWithReduce('a bb ccccccc'))
