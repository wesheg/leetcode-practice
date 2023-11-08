/**
 * You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
 * Each element nums[i] represents the maximum length of a forward jump from index i.
 * In other words, if you are at nums[i], you can jump to any nums[i + j] where:
 *    - 0 <= j <= nums[i]; and
 *    - i + j < n
 *
 * Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].
 *
 * My Solution
 * -----------
 * Use a greedy algorithm to advance as far as possible until a right pointer reaches the final index.
 */

function jump(nums: number[]): number {
  let jumps = 0;
  let leftPointer = 0;
  let rightPointer = 0;
  while (rightPointer < nums.length - 1) {
    let maxReach = 0;
    for (let i = leftPointer; i <= rightPointer; i++) {
      const jumpLength = nums[i];
      maxReach = Math.max(maxReach, i + jumpLength);
    }
    leftPointer = rightPointer + 1;
    rightPointer = maxReach;
    jumps++;
  }
  return jumps;
}

console.log('JumpGame 2');
console.log(
  `${jump([
    6, 2, 6, 1, 7, 9, 3, 5, 3, 7, 2, 8, 9, 4, 7, 7, 2, 2, 8, 4, 6, 6, 1, 3,
  ])}`
);
console.log(`${jump([1, 0])} == 1`);
console.log(`${jump([1, 1, 0])} == 2`);
console.log(`${jump([2, 3, 1, 1, 4])} == 2`);
console.log(`${jump([2, 3, 0, 1, 4])} == 2`);
console.log(`${jump([1, 1, 1, 1])} == 3`);
