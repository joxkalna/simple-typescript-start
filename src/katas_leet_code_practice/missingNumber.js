/* 
problem statement: Given an array nums containing n distinc numbers in range of [0,n]
return the only number in the range that is missing from the array
input num = [3,0,1]
 output = 2
 */

let missingNumber = num => {
  let arrNumLength = num.length
  num.sort((a, b) => a - b)

  for (let i = 0; i < arrNumLength; i++) {
    if (num[i] !== i) {
      //when this becomes true e.g not equal to index then return that index value
      return i
    }
  }
  return arrNumLength //this covers an edge case of [1,2] => should be output: 3 as it returns the last number in the list
}
console.log(missingNumber([1, 2, 4])) // 0 so this returns as problem statmen tis [0,n]
console.log(missingNumber([0, 1])) // 2 so this returns with no edge case

// problem statement - return all missing numbers from [0,n] e.g if [1,2,4] return 0,3
let findAllMissing = num => {
  let numSet = new Set(num)
  let maxNum = Math.max(...num) //add all the numbers in an array
  let missing = []

  for (let i = 0; i <= maxNum; i++) {
    if (!numSet.has(i)) {
      //if this is true - e.g the number of index does not include in the set, we push to missing array.
      missing.push(i)
    }
  }
  return missing
}
console.log(findAllMissing([1, 2, 4])) // 0,3  so this returns as problem statmen tis [0,n]
console.log(findAllMissing([0, 1])) // 2 so this returns with no edge case
console.log(findAllMissing([1, 2, 4, 8, 10])) // 0,3  so this returns as problem statmen tis [0,n]
