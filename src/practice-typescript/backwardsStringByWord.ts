export default function backwardString(text: string): any {
  return text
    .split(' ')
    .map(word => [...word].reverse().join(' '))
    .join(' ')
}
console.log(backwardString('hello  sunshine'))

// split [h,e,l,l,o]
// reverse [o,l,l,e,h]
// join (olleh)
