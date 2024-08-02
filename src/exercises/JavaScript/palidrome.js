function checkIfStringPalidrome(word) {
    return word === word.split('').reverse().join('')
}
console.log(checkIfStringPalidrome('racecar')) //true
console.log(checkIfStringPalidrome('hello'))   //false