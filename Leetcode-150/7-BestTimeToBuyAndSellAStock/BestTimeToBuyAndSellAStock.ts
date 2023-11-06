/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a
 * different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction.
 * If you cannot achieve any profit, return 0.
 *
 * Solution
 * --------
 * - Loop through the array
 * - At each iteration, i, calculate the Min(prices[0, i+1]) and the Max(prices[i+1, end])
 * - Total profit will be the highest difference between these numbers.
 *
 *  Update: this approach is too slow
 * New Solution:
 * -------------
 * Use two pointers, an index for looping, and a buy pointer
 * As you loop through the array, calculate the new profit from the new value and the
 * buy pointer.
 * If profit is negative, move the buy pointer to this point
 * set profit to be max of this value and prev stored value
 */

function maxProfit(prices: number[]): number {
  let buyPointer = 0;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    const potentialProfit = prices[i] - prices[buyPointer];
    if (potentialProfit < 0) buyPointer = i;
    profit = Math.max(potentialProfit, profit);
  }
  return profit;
}

console.log('maxProfit');
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

console.log('maxProfit');
console.log(maxProfit([7, 6, 4, 3, 1]));
