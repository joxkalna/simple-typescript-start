import { characters } from '../fixtures/starwarsCharacters';
const starWars = characters;

//1. Is there at least one male character?

const starwarsSome = starWars.some((male) => male.gender === 'male');
//2. Is there at least one male character?
const starwarsSomeFemale = starWars.some(
  (female) => female.gender === 'female',
);

//3. Is there at least one character with blue eyes?
const starWarsBlue = starWars.some((blue) => blue.eye_color === 'blue');

// 4. Is there at least one character taller than 200?
const starWarsTaller = starWars.some(
  (tallerThan2M) => tallerThan2M.height > 200,
);

//5. Is there at least one character that has mass less than 50?
const starwarsMass = starWars.some((mass) => mass.mass < 50);
console.log(starWarsTaller);
