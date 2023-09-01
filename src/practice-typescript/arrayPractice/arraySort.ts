import { characters } from '../fixtures/starwarsCharacters';
const starWars = characters;

//1. Sort by name
// If the result is negative, a is sorted before b.

starWars.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});

//2. Sort by name
starWars.sort(function (a, b) {
  if (a.mass < b.mass) {
    return -1;
  }
  return 0;
});
//3. Sort by mass
starWars.sort(function (a, b) {
  if (a.height < b.height) {
    return -1;
  }
  return 0;
});

starWars.sort(function (a, b) {
  if (a.gender < b.gender) {
    return -1;
  }
  return 0;
});
console.log(starWars);
