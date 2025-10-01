const backwardComp = (text: string): string => {
  return text
    .split('')
    .map(word => [...word].reverse())
    .join('')
}
console.log(backwardComp('car'))
