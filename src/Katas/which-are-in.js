export function whichAreIn(array1, array2) {
    let arr = array2.join("")
    return array1.filter(item => arr.search(item) !== -1).sort()
}

const arr1 = ["xyz", "live", "strong"]
const arr2 = ["lively", "alive", "harp", "sharp", "armstrong"]

whichAreIn(arr1, arr2)

