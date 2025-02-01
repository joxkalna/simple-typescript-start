function mergeArrays(firstArray, secondArray) {
  const combinedArr = firstArray + secondArray
  let finalArr = []

  for (let i = 0; i < combinedArr.length; i++) {
    finalArr.push(firstArray[i])
    finalArr.push(secondArray[i])
  }
  return finalArr.filter(item => item !== undefined)
}

console.log(mergeArrays([9, 10, 11, 12], ['a', 'b']))
