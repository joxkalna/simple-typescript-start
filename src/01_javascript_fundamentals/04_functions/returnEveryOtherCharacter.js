// Slice a string such that you return every other character.

function sliceStringUp(str) {
  let arr = []
  let size = 1

  for (let i = 1; i < str.length; i += 2) {
    arr.push(str.slice(i, i + size))
  }
  return arr.join('')
}

console.log(sliceStringUp('2j2o'))
