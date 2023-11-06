/**
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 *
 * Try to do this in place with O(1) space.
 *
 * Examples:
 * ---------
 * nums = [-1,-100,3,99], k = 2
 * Output: [3,99,-1,-100]
 *
 * Solution:
 * ---------
 * First, establish the actual number of rotations.
 * For example, rotating the list nums.length times is the same as rotating it 0 times
 * Therefore, the number of rotations is k % nums.length
 *
 * Reverse the input array
 * Then reverse the first "rotations" number of elements
 * Then reverse the final "nums.length - rotations" number of elements
 * This is not an obvious solution, but it is the only one that can run with O(1) space.
 */

function reverseArray(
  nums: number[],
  leftPointer: number,
  rightPointer: number
): void {
  while (rightPointer > leftPointer) {
    const temp = nums[rightPointer];
    nums[rightPointer--] = nums[leftPointer];
    nums[leftPointer++] = temp;
  }
}

function rotate(nums: number[], k: number): void {
  const rotations = k % nums.length;
  if (rotations === 0) return;
  reverseArray(nums, 0, nums.length - 1);
  reverseArray(nums, 0, rotations - 1);
  reverseArray(nums, rotations, nums.length - 1);
}

let nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 5);
console.log(`Rotated Array`);
console.log(nums);

nums = [1, 2, 3, 4, 5, 6];
rotate(nums, 2);
console.log(`Rotated Array`);
console.log(nums);

nums = [-1, -100, 3, 99];
rotate(nums, 2);
console.log(`Rotated Array`);
console.log(nums);

nums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27,
];
rotate(nums, 38);
console.log('Rotated Array');
console.log(nums);

nums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
];
rotate(nums, 29);
console.log('Rotated Array');
console.log(nums);
