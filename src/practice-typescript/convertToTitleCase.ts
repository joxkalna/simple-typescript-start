function toTitleCase(sentence: string): string {
  const lowerCaps = sentence.toLowerCase();
  const splitArr = lowerCaps.split(' ');
  const toTitleCase = splitArr.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return toTitleCase.join(' ');
}

console.log(toTitleCase('HELLO wORld and TANYA loVes Jo'));
