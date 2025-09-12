// loop through an array
const arrLoop = () => {
  let arr = [1, 2, 3, 4]
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}
arrLoop()

// remove dupes with filter
let iGotDups = [1, 1, 1, 1, 1, 3, 3, 3, 3, 33, 3, 3, 6, 5, 5, 5, 5, 5]
let noDupes = iGotDups.filter((item, index) => iGotDups.indexOf(item) == index)
console.log(noDupes)

// remove dupes with newSet
let noDupes2 = [...new Set(iGotDups)]
console.log(noDupes2)

// find maximum value - with Math.max
let arrVal = [1, 2, 3, 44, 5, 6]
let maxVal = Math.max(...arrVal)
console.log(maxVal)

// find maximum value - with reduce
let arrvalMax = [1, 2, 3, 44, 5, 6]
let max = arrvalMax.reduce((a, b) => Math.max(a, b))
console.log(max)

// summ all elements of arrvalMax
let mySumOfArr = [1, 2, 3]
let sumElements = mySumOfArr.reduce((a, b) => a + b)
console.log(sumElements)

// check if array contains value of 5
let arrOfFive = [1, 2, 3, 4, 5]
let containsFive = arrOfFive.includes(5)
let differentContain = arrOfFive.indexOf(6) !== -1
console.log(containsFive)
console.log(differentContain)

// using array filter even numbers
let evenNumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let findEven = evenNumArr.filter(num => num % 2 == 0)
console.log('findEven: ', findEven)

// transform Array (double each) using map
let doubleArr = [1, 2, 3, 4, 5]
let doubleUpArr = doubleArr.map(num => num * 2)
console.log('double up', doubleUpArr)
