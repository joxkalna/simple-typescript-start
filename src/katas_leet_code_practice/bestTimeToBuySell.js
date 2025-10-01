/*
 Best Time to Buy and Sell Stock II

You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time.
 However, you can sell and buy the stock multiple times on the same day, ensuring you never hold than one share of the stock.

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
*/

// current solution cannot take negative
// const buySellStock = prices => {
//   let profit = 0
//   for (let i = 0; i < prices.length - 1; i++) {
//     const buyPrice = prices[i]
//     const sellPrice = prices[i + 1]
//     if (sellPrice > buyPrice && buyPrice >= 0) {
//       //runs only if sellPrice > buyPrice is TRUE (profit) & valid price
//       profit += sellPrice - buyPrice
//     }
//   }
//   return profit
// }

const buySellStock = prices => {
  let profit = 0
  for (let i = 0; i < prices.length - 1; i++) {
    const buyStock = prices[i]
    const sellStock = prices[i + 1]

    if (sellStock > buyStock && buyStock >= 0) {
      profit += sellStock - buyStock
    }
  }
  return profit
}

console.log(buySellStock([7, 1, 5, 3, 6, 4])) // 7
console.log(buySellStock([-7, 1, 5, 3, 6, 4])) // 7
console.log(buySellStock([8, -1, 5, 3, 6, 4])) // 3
