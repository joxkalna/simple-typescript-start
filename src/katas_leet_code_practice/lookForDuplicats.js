const findDupes = (array1, array2) => {
  return array1.filter(item => array2.includes(item))
}

const array1 = ['apple', 'cherry', 'bannana']
const array2 = ['apple', 'tomato', 'bannana']

console.log(findDupes(array1, array2))
