//Write a function to chop a string into chunks of a given length and return it as array

function chopStringsIntoChunks(str, size) {
  const arr = []
  let i = 0
  let splitString = str.split(' ').join('')

  while (i < splitString.length) {
    //
    arr.push(splitString.slice(i, i + size)) //
    i += size
  }
  return arr
}

console.log(chopStringsIntoChunks('I am Java', 3))
