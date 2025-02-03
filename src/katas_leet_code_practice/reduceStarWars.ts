//https://github.com/jamesqquick/javascript-array-functions-practice

import { characters } from './fixtures/starwarsCharacters'
const starWars = characters

const getTotalMass = starWars.reduce(
  (acc, characters) => acc + characters.mass,
  0,
)
const getTotalHeight = starWars.reduce((acc, height) => acc + height.height, 0)
const getTotalCharofAllNames = starWars.reduce(
  (acc, character) => acc + character.name.length,
  0,
)

const getTotalcharByEyeColor = starWars.reduce(
  (acc, characters) => acc + characters.eye_color.length,
  0,
)

console.log('total mass of all characters:', getTotalMass)
console.log('total height of all characters:', getTotalHeight)
console.log(
  'total number of characters in all the character names',
  getTotalCharofAllNames,
)
console.log(
  'Get the total number of characters by eye color',
  getTotalcharByEyeColor,
)
