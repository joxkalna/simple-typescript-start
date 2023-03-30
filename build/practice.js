"use strict";
/* eslint-disable no-console */
function repeatSyllableSon(syllable, repeatNumber) {
    var song = '';
    for (var i = 0; i <= repeatNumber; i++) {
        //another way saying x = x + y
        song += syllable;
    }
    console.log(song);
}
repeatSyllableSon('la', 4);
