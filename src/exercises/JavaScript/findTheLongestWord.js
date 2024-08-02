function findTheLongestWord(str) {
    const splitStr = str.split(" ")
    let findTheWord = ''
    for (let index = 0; index < splitStr.length; index++) {
        if (splitStr[index].length > findTheWord.length) {
            findTheWord = splitStr[index]
        }
    }
    return findTheWord
}

console.log(findTheLongestWord('big bad woooooooolf visiting grandmaaaaaaaaaaaaaaaaaaa'))