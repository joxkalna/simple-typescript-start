/**
 * @param {number[]} nums
 * @param {number} target = e.g 6 = [1,3,3,4,8] => 3+3
 * @return {number[]} result = [0,1]
 */

// for a leet challenge - time/space complexity issue, for large set this would not work work
const twoSums = (nums: number[], target: number): number[] => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
}

console.log('my target is 6', twoSums([3, 2, 4], 6))
console.log('my target is 6', twoSums([], 5)) //should return []
console.log('my target is 6', twoSums([1, 2, 3], 10)) //should return []
console.log('my target is 6', twoSums([1, 2], 5)) //should return []
console.log('my target is 6', twoSums([3, 3], 6)) //should [0,1]

/**
 * discussion points:
 * time/space complexity trade-offs - for loop vs maps
 * scalability and performance
 * Input validation
 * Typescript for safer types
 * Edge case considatration e.g negative, null etc
 */
