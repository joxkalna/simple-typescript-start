export default function findLongestWord(sentence: string): string {
  //create a array to split up the sentence;
  let splitArray = sentence.split(' ');
  //create an empty let to assing the word to;
  let longestWord = '';
  //create a for loop to identify the lenght;
  for (let index = 0; index < splitArray.length; index++) {
    if (splitArray[index].length > longestWord.length) {
      longestWord = splitArray[index];
    }
  }
  return longestWord;
}

console.log(findLongestWord('a bb ccc'));
