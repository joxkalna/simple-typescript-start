function oddEven(numbers) {
    const odd = []
    const even = []

    numbers.map((number) => number % 2 === 0 ? even.push(number) : odd.push(number))
    return { odd, even }
}

console.log(oddEven([1, 2, 3, 5, 7, 8]))

const oddsAndEvens = number => {
    const odd = []
    const even = []

    number.map((number) => number % 2 === 0 ? even.push(number) : odd.push(number))
    return { odd, even }
}

console.table(oddsAndEvens([1, 2, 3, 5, 7, 8]))
