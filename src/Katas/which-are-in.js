/* 
The function is designed to check if this element exists within the joined string of array2.

 array1.filter(...) iterates over each element of array1.
 For each iteration, item represents the current element from array1.
 arr.search(item) looks for item (from array1) within the joined string of array2.
 If item is found in arr, search returns a non-negative index, so the filter condition is true, 
 and the item is kept.
*/

const substringOfArray = (array1, array2) => {
  let arr = array2.join(''); //join all items to arr
  return array1.filter((item) => arr.search(item) !== -1).sort();
};

const arr1 = ['xyz', 'live', 'strong'];
const arr2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];

console.log(substringOfArray(arr1, arr2));
