/**
 * You are given an integer array nums. You are initially positioned at the array's first index,
 * and each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 *
 * My Solution
 * -----------
 * The simplest version of this problem is an array with one element. Return true for these.
 * We don't care about the most efficient path, or if there are multiple paths, we only care
 * about reaching the end. Therefore, the jumper should always jump to the space that gets
 * them the closest to the end.
 */

function chooseNextJump(nums: number[], currentIndex: number): number {
  const jumpsAllowed = nums[currentIndex];
  let maxAdvancement = 0;
  let jumpIndex = currentIndex;
  for (let i = 0; i <= jumpsAllowed; i++) {
    const advancementPotential = i + nums[i + currentIndex];
    if (advancementPotential > maxAdvancement) {
      maxAdvancement = advancementPotential;
      jumpIndex = currentIndex + i;
    }
  }
  return jumpIndex;
}

function canJump(nums: number[]): boolean {
  if (nums.length < 2) return true;
  const targetIndex = nums.length - 1;
  let currentIndex = 0;
  while (currentIndex < targetIndex) {
    const canMakeIt = currentIndex + nums[currentIndex] >= targetIndex;
    if (canMakeIt) return true;
    const nextPlace = chooseNextJump(nums, currentIndex);
    if (nextPlace === currentIndex) return false;
    currentIndex = nextPlace;
  }
  return false;
}

console.log('Can Jump');
console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([0]));
console.log('Can Jump Again');
console.log(canJump([3, 2, 1, 0, 4]));
