function backWardString(text: string): string {
  return text
    .split(' ') // [ 'backward', 'sunshine', 'me' ]
    .map(word => [...word].reverse().join(' ')) // [...word] - spreads all from the split and creates a new array
    .join('')
}
console.log(backWardString('backward sunshine me'))
