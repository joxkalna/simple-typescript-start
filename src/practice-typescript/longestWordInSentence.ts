export default function longestWord(sentence: string): string {
  //need to split the word as we can't directly use .length on string
  const splitArray = sentence.split('');
  //initialize a variable to store the longest word
  let longestWord = '';

  //for loop to identify which word in the index is the longest in length
  for (let i = 0; i < splitArray.length; i++) {
    if (splitArray[i].length > longestWord.length) {
      longestWord = splitArray[i];
    }
  }
  return longestWord;
}

//assign that to a let by checking its index

console.log(longestWord('hello world'));
