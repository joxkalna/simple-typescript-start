"use strict";
/* eslint-disable no-console */
function performDanceMove(moveName, moveReps, hasFlair) {
    console.log("I do the ".concat(moveName, " ").concat(moveReps, " times !"));
    if (hasFlair) {
        console.log('I do it with flair!');
    }
}
var danceMoves = [
    ['chicken beak', 4, false],
    ['wing flap', 4, false],
    ['tail feather shake', 4, false],
    ['clap', 4, false],
    ['chicken beak', 4, true],
    ['wing flap', 4, true],
    ['tail feather shake', 4, true],
    ['clap', 4, true],
];
danceMoves.forEach(function (move) { return performDanceMove.apply(void 0, move); });
