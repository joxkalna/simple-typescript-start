const findDupes = (array1, array2) => {
  return array1.filter(item => array2.includes(item))
}

const array1 = ['apple', 'cherry', 'bannana']
const array2 = ['apple', 'tomato', 'bannana']

console.log(findDupes(array1, array2))

// removes dupes from a sorted array
const removeDupesFromSortedArr = input => {
  input.sort((a, b) => a - b)
  return [...new Set(input)]
}

console.log(removeDupesFromSortedArr([1, 1, 2])) //return 1,2
