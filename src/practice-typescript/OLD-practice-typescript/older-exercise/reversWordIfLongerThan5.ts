//if letters more than 5 in a sentence reverse it.

export default function spinWords(word: string): string {
  //split each word ["HEY", "FELLOW", "WARRIORS"]
  let splitStringArray = word.split(" ");
  // loop through the array, each index [0,1,2] stops when reached end of index;
  for (let i = 0; i < splitStringArray.length; i++) {
    //if inside array the word lenght is more than or equal to 5, we split it, reverse, join back
    if (splitStringArray[i].length >= 5) {
      splitStringArray[i] = splitStringArray[i].split("").reverse().join("");
    }
  }
  //needs to be reasigned again and joined back
  let joinBackString = splitStringArray.join(" ");
  return joinBackString;
}
