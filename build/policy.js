"use strict";
var policy = function (name, age, minor) {
    if (minor) {
        console.log("No wine or alchohol purchase allowed for ".concat(name, " who is ").concat(age, " years old."));
    }
};
var adult = ['Dan', 21, false];
policy.apply(void 0, adult);
