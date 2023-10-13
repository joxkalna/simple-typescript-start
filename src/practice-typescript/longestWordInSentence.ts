export default function longestWord(sentence: string): string {
  //need to split the word as we can't directly use .length on string
  const splitArray = sentence.split(' ');
  //initialize a variable to store the longest word
  let longestWord = '';
  //for loop to identify which word in the index is the longest in length and then
  // assign that to a let by checking its index
  for (let index = 0; index < splitArray.length; index++) {
    if (splitArray[index].length > longestWord.length) {
      longestWord = splitArray[index];
    }
  }
  return longestWord;
}
console.log(longestWord('hello world'));
