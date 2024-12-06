/**
 * @param {string} s
 * @return {number}
 */
const romanNum = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
])
var romanToInt = function (s) {
    let result = 0

    for (let i = 0; i < s.length; i++) {
        // get the value of current Roman numeral
        const currentValue = romanNum.get(s[i])

        //check if we can compare the next value in the map (inbuild get form Map)
        if (i + 1 < s.length) {
            const nextValue = romanNum.get(s[i + 1])
            // if the current numerical value is smaller than the next, we subtract it
            if (currentValue < nextValue) {
                result -= currentValue
                continue
            }
            result += currentValue
            continue
        }
        //last character, just add its value
        result += currentValue
    }

    return result

};
console.log(romanToInt('III')) // should be 3