// converting first letter to Title
// us a map
// use chartAt(0) to only target first
// we then need to join them all back

export default function converToTitle(text: string): string {
  // we need to lower all of the cases
  const lowerCaps = text.toLowerCase();
  // split so it puts in array word.split()
  const splitArr = lowerCaps.split(' ');
  // map the word to allow targeting upper letters.put in an object and return it
  const mapWord = splitArr.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return mapWord.join(' ');
}
console.log(converToTitle('tanya loves jo'));
