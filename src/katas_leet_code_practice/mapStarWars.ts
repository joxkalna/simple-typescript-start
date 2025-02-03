//https://github.com/jamesqquick/javascript-array-functions-practice

import { characters } from './fixtures/starwarsCharacters'
const starWars = characters

// 1.Get an array of all names
const getAllNames = starWars.map(firstName => firstName.name)
// 2.Get an array of all heights
const getAllHeights = starWars.map(getHeigts => getHeigts.height)
// 3.Get an array of objects with just name and height properties
const getNameAndHeight = starWars.map(person => ({
  name: person.name,
  height: person.height,
}))
// 4.Get an array of all first names
const getArrayOfNames = starWars.map(firstName => firstName.name.split(' '))

console.log('getAllNames', getAllNames)
console.log('getAllHeights', getAllHeights)
console.log('getNameandHeight', getNameAndHeight)
console.log('getArrayOfNames:', getArrayOfNames)
