//https://github.com/jamesqquick/javascript-array-functions-practice
import { characters } from '../fixtures/starwarsCharacters';
const starWars = characters;
// REDUCE - takes array of value and reduce it down to single value!

//EXERCISE

//1. Get the total mass of all characters

const totalMass = [...starWars].reduce((total, personMass) => {
  return total + personMass.mass;
}, 0);
console.log(totalMass);

//2. Get the total height of all characters

const totalHeight = [...starWars].reduce((total, personHeight) => {
  return total + personHeight.height;
}, 0);

console.log(totalHeight);

//3. Get the total number of characters in all the character names

const totalNamesInCharacters = [...starWars].reduce((total, totalName) => {
  return total + totalName.name.length;
}, 0);
console.log('total name of characters:', totalNamesInCharacters);

//4. Get the total number of characters by eye color (hint. a map of eye color to count)

const totalNumberOfCharactersByEyeColor = characters.reduce(
  (obj: any, character): number => {
    //extracts the eye color of each character: blue, yellow, brown, blue
    const eyeColorKey = character.eye_color;
    // here we give each color a obj and count how many times the color appears in alist
    // accessing and updating values within an object using keys
    obj[eyeColorKey] = (obj[eyeColorKey] || 0) + 1; //deals with if it doesn't exist yet in obj[eyecolor]
    return obj;
  },
  {},
);

console.log('Eye color count:', totalNumberOfCharactersByEyeColor);
