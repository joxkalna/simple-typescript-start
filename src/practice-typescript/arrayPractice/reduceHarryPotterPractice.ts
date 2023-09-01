import { wizards } from '../fixtures/wizzards';
const harryPotter = wizards;

// using reduce function You want to create a new array that contains just
// the names of wizards who are in Hufflepuff.
const wizzardUsers = harryPotter.reduce((newArr: string[], wizards) => {
  wizards.house === 'Hufflepuff'
    ? newArr.push(wizards.name)
    : console.log('sozs, no names');
  return newArr;
}, []);

console.log(wizzardUsers);
