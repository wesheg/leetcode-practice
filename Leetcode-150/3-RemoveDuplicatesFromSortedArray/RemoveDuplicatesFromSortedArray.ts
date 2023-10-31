/**
 * Problem Statement:
 * ------------------
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates
 * in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same.
 * Then return the number of unique elements in nums.
 * Consider the number of unique elements of nums to be k.
 * To get accepted, you need to do the following things:
 *    - Change the array nums such that the first k elements of nums contain the unique elements
 *      in the order they were present in nums initially.
 *      The remaining elements of nums are not important as well as the size of nums.
 *    - Return k.
 *
 * My Solution:
 * ------------
 * Just like in RemoveElement, loop over the array with a pointer
 * compare a value, and repalce the value in the array if !== comp value
 *
 */

function removeDuplicates(nums: number[]): number {
  let k = 0;
  let comp;
  for (const num of nums) {
    if (num !== comp) {
      nums[k++] = num;
    }
    comp = num;
  }
  return k;
}

console.log(removeDuplicates([1, 1, 2]));
