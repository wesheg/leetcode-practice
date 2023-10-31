/**
 * Problem Statement:
 * ------------------
 * Given an integer array nums sorted in non-decreasing order,
 * remove some duplicates in-place such that each unique element appears at most twice.
 * The relative order of the elements should be kept the same.
 * Since it is impossible to change the length of the array in some languages,
 * you must instead have the result be placed in the first part of the array nums.
 * More formally, if there are k elements after removing the duplicates,
 * then the first k elements of nums should hold the final result.
 * It does not matter what you leave beyond the first k elements.
 * Return k after placing the final result in the first k slots of nums.
 *
 * Do not allocate extra space for another array. You must do this by modifying the
 * input array in-place with O(1) extra memory.
 *
 * My Solution:
 * ------------
 * This is similar to Remove Element and Remove Duplicates from Array.
 * Iterate over the list once, keeping track of 'k'.
 * Use a hash map to track the occurances of each item to ensure that no item appears
 * more than twice
 *
 * Second solution: try not to use a hash map so space complexity is O(1)
 */

function removeDuplicates2(nums: number[]): number {
  let k = 0;
  let referenceNum;
  let occurances = 0;
  for (const num of nums) {
    if (num !== referenceNum) {
      nums[k++] = num;
      occurances = 1;
      referenceNum = num;
    } else if (occurances < 2) {
      occurances++;
      nums[k++] = num;
    } else {
      continue;
    }
  }
  return k;
}

console.log(removeDuplicates2([0, 0, 1, 1, 1, 1, 2, 3, 3]));
