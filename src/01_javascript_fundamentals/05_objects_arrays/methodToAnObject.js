const obj = {
  a: 10,
  b: 20,
  add() {
    return this.a + this.b
  },
}
console.log(obj.add())
