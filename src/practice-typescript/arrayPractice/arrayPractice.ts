//https://github.com/jamesqquick/javascript-array-functions-practice

// 1. Get an array of all names
import { characters } from '../fixtures/starwarsCharacters';
const starWars = characters;

const fullName = starWars.map((firstName) => {
  return firstName.name;
});

//console.log("firstName", fullName);

// 2. Get an array of all heights
const starHeights = starWars.map((height) => {
  return height.height;
});

//console.log(starHeights);

//3.  Get an array of objects with just name and height properties

const nameAndHeight = starWars.map((person) => ({
  name: person.name,
  height: person.height,
}));

// console.log(nameAndHeight);
// 4. Get an array of all first names
const justFirstName = starWars.map((firstName) => {
  return firstName.name.split(' ')[0];
});
// console.log("just first name:", justFirstName);

// REDUCE - takes array of value and reduce it down to single value!

//EXERCISE

const items = [
  { name: 'Johnny', price: 5 },
  { name: 'David', price: 10 },
  { name: 'Jo', price: 45 },
];

const totalPrice = items.reduce((total, item) => {
  return total + item.price;
}, 0);

//console.log(totalPrice);

const people = [
  { name: 'Johnny', age: 5 },
  { name: 'David', age: 10 },
  { name: 'Jo', age: 45 },
  { name: 'Joe', age: 45 },
];

const result = people.reduce((groupedPeople: any, person) => {
  const age = person.age;
  if (groupedPeople[age] === undefined) {
    groupedPeople[age] = [];
  }
  groupedPeople[age].push(person);
  return groupedPeople;
}, {});
console.log(result);
