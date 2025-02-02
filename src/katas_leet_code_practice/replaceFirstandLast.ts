export default function replaceFirst(values: number[]): number[] {
  //shift means removing first value
  const arrayFirstValue = values.shift()
  // pop means removing last value
  const arrayLastValue = values.pop()

  //as array can return undefined we need to check first!
  if (arrayLastValue !== undefined) {
    values.unshift(arrayLastValue)
  }
  if (arrayFirstValue !== undefined) {
    values.push(arrayFirstValue)
  }
  return values
}

console.log(JSON.stringify(replaceFirst([1, 2, 3, 4])))
console.log(JSON.stringify(replaceFirst([]), []))
