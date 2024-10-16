/**
 * Problem: Find the Maximum in an Array
 *
 * Problem Statement:
 * Given an array of integers, your task is to find the maximum element in the array.
 *
 * Input:
 * The first line contains a single integer n (1 ≤ n ≤ 10^5), representing the number of elements in the array.
 * The second line contains n space-separated integers a1, a2, ..., an (-10^9 ≤ ai ≤ 10^9), representing the elements of the array.
 *
 * Output:
 * Output a single integer — the maximum value among the elements of the array.
 *
 * Constraints:
 * The array can have up to 100,000 elements.
 * The values of the elements in the array can be as small as -10^9 and as large as 10^9.
 *
 */

console.time("Execution Time for Array");
function findMaximum(arr) {
  let max = arr[0];

  for (const num of arr) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

console.log(findMaximum([1, 2, 3, 4, 5]));
console.log(findMaximum([-1, -2, -3, -4, -5]));
console.log(findMaximum([-1, 2, -3, 4, -5]));
console.log(findMaximum([]));

console.timeEnd("Execution Time for Array");
