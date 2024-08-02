//Write a function to chop a string into chunks of a given length and return it as array

function stringChunk(str, size = str.length) {
    const arr = []
    let i = 0
    while (i < str.length) {
        arr.push(str.slice(i, i + size))
        i = i + size
    }
    return arr
}
console.log(stringChunk('I am Javascript', 4))
