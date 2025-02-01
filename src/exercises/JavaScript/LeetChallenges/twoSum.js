/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let arrLength = nums.length
  result = []

  for (let i = 0; i < arrLength; i++) {
    for (let j = i + 1; j < arrLength; j++) {
      if (nums[i] + nums[j] === target) {
        console.log('Match found!')
        result.push(i)
        result.push(j)
      }
    }
    return result
  }
}

console.log('WHERE I RUN', twoSum([3, 2, 4], 6))
