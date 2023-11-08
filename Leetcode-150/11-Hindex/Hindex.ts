/**
 * Given an array of integers citations where citations[i] is the number of citations
 * a researcher received for their ith paper, return the researcher's h-index.
 * According to the definition of h-index on Wikipedia:
 * The h-index is defined as the maximum value of h such that the given researcher
 * has published at least h papers that have each been cited at least h times.
 *
 * My Solution
 * -----------
 * First, sort the array in descending order
 * Set an initial h-index variable to the maximum possible value.
 * The highest possible h-index is the length of the array.
 * Then, loop until the pointer position is equal to the h-index value - 1;
 * If a paper has fewer citations than the h-index, reset the h-index
 */

function hIndex(citations: number[]): number {
  citations.sort((a, b) => b - a);
  let result = citations.length;
  for (let i = 0; i < result; i++) {
    if (citations[i] < result) result = Math.max(i, citations[i]);
  }
  return result;
}

console.log('H Index');
console.log(hIndex([1, 2, 3]));
console.log(hIndex([3, 0, 6, 1, 5]));
console.log(hIndex([4, 4, 0, 0]));
