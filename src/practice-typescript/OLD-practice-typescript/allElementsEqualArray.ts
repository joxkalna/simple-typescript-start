function allTheSame(elements: any[]): boolean {
  // your code here
  const allElements = elements.every((verify) => verify === elements[0]);
  return allElements;
}

console.log(allTheSame([1, 1, 1, 1]));
