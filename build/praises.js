"use strict";
/* eslint-disable prettier/prettier */
var praise = [];
var messages = [
    'love it',
    'cool',
    'awesome',
    'magnificent',
    'superb',
    'great',
];
for (var i = 0; i < 5; i++) {
    praise.push([messages[Math.floor(Math.random() * 6)]]);
}
;
console.log(praise);
