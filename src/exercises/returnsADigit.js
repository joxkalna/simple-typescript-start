function returnDigis(mixArray) {
    return mixArray.filter((value) => {
        return /[0-9]/.test(value)
    })
}

console.log(returnDigis(['I am 2']))
