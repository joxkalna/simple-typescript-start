export function mergeArrays(firstArray, secondArray) {
  const finalArr = [];
  return finalArr
    .concat(firstArray, secondArray)
    .filter((item, index, arr) => arr.find(item) === index);
}
