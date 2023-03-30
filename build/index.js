"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
// eslint-disable-next-line prettier/prettier
var products_1 = __importDefault(require("../src/products"));
var productName = 'fanny pack';
var shipping;
var taxPercent;
var total;
var shippingAddress = 'London';
var product = products_1.default.filter(function (product) { return product.name === productName; })[0];
console.log(product);
if (product.preOrder === 'true') {
    console.log('We will send you a message when your product is on its way.');
}
if (Number(product.price) > 25) {
    shipping = 0;
    console.log('Free Shipping of products over $25');
}
else {
    shipping = 5;
}
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
total = Number(product.price) * taxPercent;
var taxTotal = total;
total = Number(product.price) + taxTotal + shipping;
console.log("\nProduct:  ".concat(product.name, "\nAddress:  ").concat(shippingAddress, "\nPrice:    $").concat(product.price, "\nTax:      $").concat(taxTotal.toFixed(2), "\nShipping: $").concat(shipping.toFixed(2), "\nTotal:    $").concat(total.toFixed(2), "\n"));
