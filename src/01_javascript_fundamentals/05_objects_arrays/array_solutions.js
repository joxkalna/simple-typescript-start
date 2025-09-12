// Array Practice Solutions - JavaScript Interview Prep

// 1. Find the maximum number in an array
function findMax(arr) {
  return Math.max(...arr)
}

// 2. Remove duplicates from an array
function removeDuplicates(arr) {
  return [...new Set(arr)]
}

// 3. Find the second largest number
function findSecondLargest(arr) {
  const unique = [...new Set(arr)].sort((a, b) => b - a)
  return unique[1]
}

// 4. Rotate array to the right by k positions
function rotateArray(arr, k) {
  k = k % arr.length
  return arr.slice(-k).concat(arr.slice(0, -k))
}

// 5. Find two numbers that sum to target
function twoSum(arr, target) {
  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i]
    if (map.has(complement)) {
      return [map.get(complement), i]
    }
    map.set(arr[i], i)
  }
  return []
}

// 6. Merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
  const result = []
  let i = 0,
    j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i++])
    } else {
      result.push(arr2[j++])
    }
  }

  return result.concat(arr1.slice(i)).concat(arr2.slice(j))
}

// 7. Find missing number in sequence 1 to n
function findMissingNumber(arr, n) {
  const expectedSum = (n * (n + 1)) / 2
  const actualSum = arr.reduce((sum, num) => sum + num, 0)
  return expectedSum - actualSum
}

// 8. Move all zeros to end
function moveZeros(arr) {
  let writeIndex = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[writeIndex++] = arr[i]
    }
  }

  while (writeIndex < arr.length) {
    arr[writeIndex++] = 0
  }
}

// 9. Find intersection of two arrays
function findIntersection(arr1, arr2) {
  const set1 = new Set(arr1)
  return [...new Set(arr2.filter(x => set1.has(x)))]
}

// 10. Check if array is sorted
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false
  }
  return true
}

// 11. Find subarray with maximum sum (Kadane's algorithm)
function maxSubarraySum(arr) {
  let maxSoFar = arr[0]
  let maxEndingHere = arr[0]

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i])
    maxSoFar = Math.max(maxSoFar, maxEndingHere)
  }

  return maxSoFar
}

// 12. Flatten nested array
function flattenArray(arr) {
  return arr.flat(Infinity)
}

// Alternative solutions for practice:

// Alternative 1: Find max using reduce
const findMaxReduce = arr =>
  arr.reduce((max, curr) => (curr > max ? curr : max))

// Alternative 2: Remove duplicates using filter
const removeDuplicatesFilter = arr =>
  arr.filter((item, index) => arr.indexOf(item) === index)

// Alternative 8: Move zeros using two pointers
function moveZerosTwoPointers(arr) {
  for (let i = 0, j = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
      j++
    }
  }
}

// Alternative 12: Flatten using recursion
function flattenRecursive(arr) {
  const result = []
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenRecursive(item))
    } else {
      result.push(item)
    }
  }
  return result
}
