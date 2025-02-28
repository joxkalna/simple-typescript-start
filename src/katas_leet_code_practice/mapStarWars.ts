//https://github.com/jamesqquick/javascript-array-functions-practice
import { characters } from './fixtures/starwarsCharacters'
const starWars = characters
// 1.Get an array of all names
const getAllNames = starWars.map(person => person.name)
// 2.Get an array of all heights
const getAllHeights = starWars.map(person => person.height)
// 3.Get an array of objects with just name and height properties
const getNameAndHeight = starWars.map(person => ({
  name: person.name,
  height: person.height,
}))
// r.Get an array of just first name e.g ['Luka', 'Matt']
const getArrayOfFirstNameOnly = starWars.map(
  person => person.name.split(' ')[0],
)
console.log('getAllNames', getAllNames)
console.log('getAllHeights', getAllHeights)
console.log('getNameandHeight', getNameAndHeight)
console.log('get first name only of the full name:', getArrayOfFirstNameOnly)
