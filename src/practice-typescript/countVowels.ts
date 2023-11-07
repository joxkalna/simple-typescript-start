const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function countVowels(text: string): number {
  //need to get all strings to lower case
  const lowerCaseString = text.toLowerCase();
  // need count variable to count from 0
  let count = 0;
  // for loop to loop through to see the lenght
  console.log('whats my length', lowerCaseString.length);
  for (let index = 0; index < lowerCaseString.length; index++) {
    // if vow is in it, count++
    if (VOWELS.includes(lowerCaseString[index])) {
      count++;
    }
  }
  // return the count
  return count;
}

console.log(countVowels('Hel f'));
