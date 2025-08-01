//https://github.com/jamesqquick/javascript-array-functions-practice
import { characters } from './fixtures/starwarsCharacters'
interface NameCount {
  [key: string]: number
}
const starWars = characters
//1. total mass of all characters
const getTotalMass = starWars.reduce((acc, person) => acc + person.mass, 0)
//2. total height of all characters
const getTotalHeight = starWars.reduce((acc, person) => acc + person.height, 0)
//3. total number of characters in all the character names
const getTotalCharofAllNames = starWars.reduce(
  (acc, person) => acc + person.name.length,
  0,
)

// 4. Get the total number of characters by eye color

/*
  This code uses the `reduce` method to iterate over the `starWars` array and 
  create an object (`acc`) that maps each eye color to the total count of characters 
  with that eye color. For each character, it checks their `eye_color` property and 
  increments the corresponding count in the accumulator object. If the eye color has 
  not been encountered yet, it initializes the count to 0 before incrementing it by +1. 
  The final result is an object {} which is why its empty,
  where the keys are eye colors, and the values are 
  the total count of characters with each eye color.
*/

// const getTotalCharByEyeColor = starWars.reduce<EyeColorCount>((acc, person) => {
//   acc[person.eye_color] = (acc[person.eye_color] || 0) + 1
//   return acc
// }, {})

const getTotalCharByEyeColor = starWars.reduce<NameCount>((acc, person) => {
  acc[person.eye_color] = (acc[person.eye_color] || 0) + 1
  return acc
}, {})

const getTotalbyGender = starWars.reduce<NameCount>((acc, person) => {
  acc[person.gender] = (acc[person.gender] || 0) + 1
  return acc
}, {})

// 5. Get how many females and males there are in and return as an map/object: {male:3, female2}
console.log('total mass of all characters:', getTotalMass)
console.log('total height of all characters:', getTotalHeight)
console.log(
  'total number of characters in all the character names:',
  getTotalCharofAllNames,
)
console.log(
  'Get the total number of characters by eye color:',
  getTotalCharByEyeColor,
)
console.log('Get the total number of characters by gender:', getTotalbyGender)
