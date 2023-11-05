/**
 * Problem Statement
 * -----------------
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 *
 * Try to do this in O(n) time and O(1) space
 *
 * Solution
 * --------
 * Use the Boyer–Moore majority vote algorithm
 * Start a counter at 0 and loop through the array
 * If the counter is 0, store a new majority element
 * If the element matches the stored element, increment the counter
 * If not, decrement the counter
 */

function majorityElement(nums: number[]): number {
  let counter = 0;
  let storedElement;
  for (const num of nums) {
    if (counter === 0) {
      storedElement = num;
      counter++;
    } else if (storedElement === num) {
      counter++;
    } else {
      counter--;
    }
  }
  return storedElement;
}

console.log(`majorityElement = ${majorityElement([3, 2, 1, 3, 3])}`);
console.log(`majorityElement = ${majorityElement([3, 2, 3])}`);
console.log(`majorityElement = ${majorityElement([3, 3, 2])}`);
