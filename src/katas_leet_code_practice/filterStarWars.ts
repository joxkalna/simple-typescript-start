import { characters } from './fixtures/starwarsCharacters'
const starWars = characters

// 1. get characters with mass greater than 100

const getMassOver100 = starWars.filter(person => person.mass > 100)
const getMassLessThan200 = starWars.filter(person => person.mass < 200)
const getAllMaleCharacters = starWars
  .filter(person => person.gender === 'male')
  .map(person => person.name)
console.log(getMassOver100)
console.log(getMassLessThan200)
console.log('get male gender only', getAllMaleCharacters)
