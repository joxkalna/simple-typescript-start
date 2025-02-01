/* 
map in this case is not a good example, because map is used to transform each element of an array
and return a new array with the results. Its always returns an array of the same length as the input

*/
// const oddsAndEvens = (inputArray) => {
//   const odds = [];
//   const even = [];
//   inputArray.map((number) =>
//     number % 2 === 0 ? even.push(number) : odds.push(number),
//   );
//   return { odds, even };
// };
/*
forEach is used when you want to perform an operation on each element of an array
but don't need to return a new array
*/

const oddsAndEvenWithLoop = (inputArray) => {
  const odds = [];
  const even = [];
  inputArray.forEach((currentNumber) =>
    currentNumber % 2 === 0
      ? even.push(currentNumber)
      : odds.push(currentNumber),
  );
  return { odds, even };
};
console.log(oddsAndEvenWithLoop([1, 2, 3, 4, 5, 6, 7]));
