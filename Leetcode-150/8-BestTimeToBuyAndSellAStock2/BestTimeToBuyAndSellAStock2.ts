/**
 * You are given an integer array prices where prices[i] is the
 * price of a given stock on the ith day.
 * On each day, you may decide to buy and/or sell the stock.
 * You can only hold at most one share of the stock at any time.
 * However, you can buy it then immediately sell it on the same day.
 * Find and return the maximum profit you can achieve.
 * Example 1:
 *    Input: prices = [7,1,5,3,6,4]
 *    Output: 7
 *    Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
 *    Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
 *    Total profit is 4 + 3 = 7.
 *
 * My Solution
 * -----------
 * Loop through the array once
 * If the current value is greater than the previous value, add to profit.
 * If not, start a new buy position
 */

function maxProfit2(prices: number[]): number {
  let profit = 0;
  if (prices.length < 2) return profit;
  for (let i = 1; i < prices.length; i++) {
    const incrementalProfit = prices[i] - prices[i - 1];
    if (incrementalProfit > 0) profit += incrementalProfit;
  }
  return profit;
}

console.log('maxProfit2');
console.log(maxProfit2([7, 1, 5, 3, 6, 4]));
