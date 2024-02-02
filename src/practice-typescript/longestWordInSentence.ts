export default function findLongestWord(sentence: string): string {
  //create a array to split up the sentence;
  let splitArr =sentence.split(" ")
  //create an empty let to assing the word to;
  let longestWord = ''
  //create a for loop to identify the lenght;
  for(let i=0; i < splitArr.length; i++){
    if(splitArr[i].length > longestWord.length){
      longestWord = splitArr[i]
    }
  }
    //return the longest word
    return longestWord

}

console.log(findLongestWord('a bb ccc'));
