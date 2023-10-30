/**
 * Problem Statement:
 * ------------------
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
 * and two integers m and n, representing the number of elements in nums1 and nums2
 * respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function, but instead
 * be stored inside the array nums1. To accommodate this, nums1 has a length
 * of m + n, where the first m elements denote the elements that should be merged,
 * and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 *
 * My Solution:
 * ------------
 * use 3 pointers: i, j, and k
 * start from the back of each list
 * i = m-1
 * j = n-1
 * k = (m+n-1)
 *
 * compare two numbers at i and j
 * put the larger of the two at position k
 * decrement each pointer
 * continue until m and n both = 0
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    const n1 = nums1[i];
    const n2 = nums2[j];
    if (n1 > n2) {
      nums1[k] = n1;
      i--;
    } else {
      nums1[k] = n2;
      j--;
    }
    k--;
  }

  while (j >= 0) {
    nums1[k] = nums2[k];
    j--;
    k--;
  }

  while (i >= 0) {
    nums1[k] = nums1[i];
    i--;
    k--;
  }
}

// tests
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);
console.log('[1, 2, 2, 3, 5, 6]');
console.log('\n');

nums1 = [1];
m = 1;
nums2 = [];
n = 0;
merge(nums1, m, nums2, n);
console.log(nums1);
console.log('[1]');
console.log('\n');

nums1 = [0];
m = 0;
nums2 = [1];
n = 1;
merge(nums1, m, nums2, n);
console.log(nums1);
console.log('[1]');
