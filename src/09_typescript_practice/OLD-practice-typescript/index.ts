/* eslint-disable no-console */
// eslint-disable-next-line prettier/prettier
import products from '../src/products'

const productName = 'fanny pack'
let shipping: number
let taxPercent: number
let total: number
const shippingAddress = 'London'

const product = products.filter(product => product.name === productName)[0]
console.log(product)

if (product.preOrder === 'true') {
  console.log('We will send you a message when your product is on its way.')
}
if (Number(product.price) > 25) {
  shipping = 0
  console.log('Free Shipping of products over $25')
} else {
  shipping = 5
}

if (shippingAddress.match('New York')) {
  taxPercent = 0.1
} else {
  taxPercent = 0.05
}
total = Number(product.price) * taxPercent
const taxTotal = total

total = Number(product.price) + taxTotal + shipping

console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`)
