/* eslint-disable no-console */
function repeatSyllableSon(syllable: string, repeatNumber: number): void {
  let song = '';
  for (let i = 0; i <= repeatNumber; i++) {
    //another way saying x = x + y
    song += syllable;
  }
  console.log(song);
}

repeatSyllableSon('la', 4);
