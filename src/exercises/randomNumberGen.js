function randomNumGen(start, end) {
  return start + Math.round(Math.random() * (end - start))
}
console.log(randomNumGen(10, 50))
