//https://github.com/jamesqquick/javascript-array-functions-practice
import { characters } from '../fixtures/starwarsCharacters';
const starWars = characters;

//1. Get characters with mass greater than 100

const massGreaterThan100 = starWars.filter((mass) => {
  return mass.mass > 100;
});

console.log(massGreaterThan100);

//2. Get characters with height less than 200

const heightLessThan200 = starWars.filter((height) => {
  return height.height < 200;
});

// console.log("all characters with less the 200cms in height", heightLessThan200);

//3. Get all male characters

const maleCharacters = starWars.filter((male) => {
  return male.gender == 'male';
});

// console.log("male characters", maleCharacters);

//4. Get all female characters

const femaleCharacters = starWars.filter((female) => {
  return female.gender == 'female';
});

console.log(femaleCharacters);
