export default function threeWords(text: string): boolean {
  return text.match(/[A-Za-z/]+ [A-Za-z/]+ [A-Za-z/]/) ? true : false;
}

// These "asserts" are used for self-checking
console.log(threeWords('Hello World hello')); //true
console.log(threeWords('He is 123 man')); // false
console.log(threeWords('He is 123 man')); //false
console.log(threeWords('1 2 3 4')); //false
console.log(threeWords('bla bla bla bla')); //true
console.log(threeWords('Hi'));
