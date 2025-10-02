//Problem statement: given an array nums, rotate the array to the right by k steps, where k is non-negative
/*
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
*/
// first way to solve this problem!

const rotate = (nums, k) => {
  //if we got: 7 items in nums array we do minus -3 for position,
  // that leave us a an index of 4 so everything after 4 e.g 5,6,7 so num.slice(4) returns [5,6,7]
  const lastPart = nums.slice(nums.length - k) //
  const firstPart = nums.slice(0, nums.length - k) //slice(start,end) & excludes the last index.

  return lastPart.concat(firstPart) // reveresed order
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
console.log(rotate([-1, -100, 3, 99], 2))

//second and tird solution? :mind-blown
