function spotTheDifference(array1: string[], array2: string[]) {
    let splitArr1 = array1.toString().split("")
    let splitArr2 = array2.toString().split("")

    let newArr = []

    for (let index = 0; index < splitArr1.length; index++) {
        splitArr1[index] !== splitArr2[index] ? newArr.push(index) : []
    }
    return newArr

}
console.log(spotTheDifference(['abc'], ['abc']))