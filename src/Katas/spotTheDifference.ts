function spotTheDifference(array1: string[], array2: string[]) {
    let splitArr1 = array1.toString().split("")
    let splitArr2 = array2.toString().split("")
    const newArr = []
    for (let i = 0; i < splitArr1.length; i++) {
        if (splitArr1[i] !== splitArr2[i]) {
            newArr.push(i)
        }
    }
    return newArr
}
console.log(spotTheDifference(['abcd'], ['abce']))