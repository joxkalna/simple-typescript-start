//https://github.com/jamesqquick/javascript-array-functions-practice

const items = [
  { name: 'Johnny', price: 5 },
  { name: 'David', price: 10 },
  { name: 'Jo', price: 45 },
]

const people = [
  { name: 'Johnny', age: 5 },
  { name: 'David', age: 10 },
  { name: 'Jo', age: 45 },
  { name: 'Joe', age: 45 },
]
const arr = [3, 5, 7] //total 15

const totalPrice = items.reduce((total, item) => total + item.price, 0)

const groupedPeopleResult = people.reduce((groupedPeople: any, person) => {
  const age = person.age
  if (groupedPeople[age] === undefined) {
    groupedPeople[age] = []
  }
  groupedPeople[age].push(person)
  return groupedPeople
}, {})
const totalArr = arr.reduce((acc, item) => acc + item, 0)

console.log(
  'grouped people by age from lowest to heighest:',
  groupedPeopleResult,
)
console.log('This is a tolta price of items:', totalPrice)

console.log('I am total of array', totalArr)
