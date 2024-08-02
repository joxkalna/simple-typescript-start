function oddEven(numbers) {
    const odd = []
    const even = []

    numbers.map((number) => number % 2 === 0 ? even.push(number) : odd.push(number))
    return { odd, even }
}

console.log(oddEven([1, 2, 3, 5, 7, 8]))