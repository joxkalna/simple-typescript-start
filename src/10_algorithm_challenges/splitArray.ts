export default function splitArray(splitArray: any[]): any[][] {
  // split array
  const splitArrayInTwo = Math.ceil(splitArray.length / 2)
  // create array1
  const subArray1 = splitArray.slice(0, splitArrayInTwo)
  //create array 2
  const subArray2 = splitArray.slice(splitArrayInTwo)
  //combine both
  const combinedArray = [subArray1, subArray2]
  return combinedArray
}
//test it out
const input = [1, 2, 3, 4, 5, 6]
const result = splitArray(input)
console.log(result)
