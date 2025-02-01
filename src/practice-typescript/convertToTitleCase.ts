// converting first letter to Title
// us a map
// use chartAt(0) to only target first
// we then need to join them all back

export default function converToTitle(text: string): any {
  const mapWord = text
    .toLowerCase()
    .split(' ')
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
  return mapWord.join(' ')
}
console.log(converToTitle('tanya loves jo'))
