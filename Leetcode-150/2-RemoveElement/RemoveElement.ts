/**
 * Problem Statement:
 * ------------------
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
 * The order of the elements may be changed.
 * Then return the number of elements in nums which are not equal to val.
 *
 * Consider the number of elements in nums which are not equal to val be k.
 * To get accepted, you need to do the following things:
 *    - Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
 *    - The remaining elements of nums are not important as well as the size of nums.
 *    - Return k.
 *
 * My Solution:
 * ------------
 * Loop through array
 * Count number of elements equal to val
 * Replace elements equal to val with '_'
 * Quicksort the array
 *
 * Better Approach:
 * use k as a pointer, and change the values in place as you iterate
 *
 */

function removeElement(nums: number[], val: number): number {
  let k = 0;
  for (const num of nums) {
    if (num !== val) nums[k++] = num;
  }
  return k;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
