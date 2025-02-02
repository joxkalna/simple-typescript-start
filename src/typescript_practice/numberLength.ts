type Numbers = {
  num: number | null
}

export default function numberLength(num: Numbers): number {
  const numAsString = num?.num?.toString() || ''
  return numAsString.match(/\d/g)?.length || 0 //deals with float numbers
}

console.log(numberLength({ num: 5566666 }))
