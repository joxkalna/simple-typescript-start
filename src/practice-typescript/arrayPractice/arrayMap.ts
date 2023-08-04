const bools = [true, true, false, true, false, false];
const findTruth = bools.map((bool) => {
  return bool ? Math.random() : 0;
});

// console.log(bools);
// console.log(findTruth);

const prices = [1.23, 19.99, 82.5, 32.87, 8, 5.2];
const taxedPrice = prices.map((price) => {
  return price > 10 ? (price * 1.2).toFixed(2) : price;
});

// console.log(prices);
// console.log(taxedPrice);

const items = ["light", "banana", "phone", "book", "mouse"];
const plurals = items.map((plural) => {
  return plural === "mouse" ? "mice" : plural + "s";
});

// console.log(plurals);

const row = [10, 20, 30, 40, 50];
const matrix = row.map((number) => {
  const array = [];
  array.push(number);
  return array;
});

console.log(matrix);
