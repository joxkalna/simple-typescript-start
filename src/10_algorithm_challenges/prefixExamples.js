//Check if a word starts with a given prefix

function checkPrefix(arr, prefix) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(prefix) !== 0) {
      console.log(`${arr[i]} does not start with ${prefix}`)
    } else {
      console.log(`${arr[i]} starts with ${prefix}`)
    }
  }
}
console.log(checkPrefix(['apple', 'bannana', 'appricot', 'cherry'], 'ap'))

const filterPrefix = (arr, prefix) => {
  return arr.filter(word => word.indexOf(prefix) === 0)
}

let results = filterPrefix(['apple', 'bannana', 'appricot', 'cherry'], 'ap')
console.log(results) // Output: apple, appricot

const checkIfWordStartsWithPrefix = (arr, prefix) => {
  for (let i = 0; i < arr.lenght; i++) {
    arr[i].indexOf(prefix) !== 0
      ? console.log(`${arr[i]} does not start with ${prefix}`)
      : console.log(`${arr[i]} starts with ${prefix}`)
  }
}
console.log(checkIfWordStartsWithPrefix)
/*
Explanation: 

What does !== 0 mean?
!== means "not equal to".
So, !== 0 means "not equal to 0".

arr[i].indexOf(prefix) !== 0 
if arr[i] value does not start with desired prefix,
return -1 
-1 !== 0 is not equal to 0 so expression is true
if it starts with prefix, returns 0
0 !==0 its false
*/
