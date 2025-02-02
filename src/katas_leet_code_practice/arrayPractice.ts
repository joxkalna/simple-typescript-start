//https://github.com/jamesqquick/javascript-array-functions-practice
import { characters } from './fixtures/starwarsCharacters'
const starWars = characters

const fullFirstName = starWars.map(firstName =>
  firstName.name.substring(0, firstName.name.indexOf(' ')),
)

const getHeights = starWars.map(heights => heights.height)

const nameAndHeight = starWars.map(person => ({
  name: person.name,
  height: person.height,
}))

const justFirstName = starWars.map(firstName => firstName.name.split(' ')[0])

const items = [
  { name: 'Johnny', price: 5 },
  { name: 'David', price: 10 },
  { name: 'Jo', price: 45 },
]

const totalPrice = items.reduce((total, item) => total + item.price, 0)

const people = [
  { name: 'Johnny', age: 5 },
  { name: 'David', age: 10 },
  { name: 'Jo', age: 45 },
  { name: 'Joe', age: 45 },
]

const groupedPeopleResult = people.reduce((groupedPeople: any, person) => {
  const age = person.age
  if (groupedPeople[age] === undefined) {
    groupedPeople[age] = []
  }
  groupedPeople[age].push(person)
  return groupedPeople
}, {})

console.log('fullFirstNam', fullFirstName)
console.log('just first name:', justFirstName)
console.log('get all people heights', getHeights)
console.log('get people heights and name', nameAndHeight)
console.log(
  'grouped people by age from lowest to heighest:',
  groupedPeopleResult,
)
console.log('This is a tolta price of items:', totalPrice)
