/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to
 * the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 *
 * Example 1:
 *    Input: nums = [1,2,3,4]
 *    Output: [24,12,8,6]
 *
 * Example 2:
 *    Input: nums = [-1,1,0,-3,3]
 *    Output: [0,0,9,0,0]
 *
 * My Solution
 * -----------
 * Make 2 passes, one forward and one backward.
 * For each position in the array, calculate the product of all values
 * before it, and all values after it.
 * On the final pass, multiply the two values together.
 */

function getProductsBefore(nums: number[]): number[] {
  let cumulativeProduct = 1;
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(cumulativeProduct);
    cumulativeProduct *= nums[i];
  }
  return result;
}

function getProductsAfter(nums: number[]): number[] {
  let cumulativeProduct = 1;
  const result = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    result.unshift(cumulativeProduct);
    cumulativeProduct *= nums[i];
  }
  return result;
}

function productExceptSelf(nums: number[]): number[] {
  const productsBefore = getProductsBefore(nums);
  const productsAfter = getProductsAfter(nums);
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(productsBefore[i] * productsAfter[i]);
  }
  return result;
}

console.log('Product Except Self');
console.log(productExceptSelf([1, 2, 3, 4]));
