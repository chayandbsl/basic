/**
 * Problem: Reverse a String
 *
 * Problem Statement:
 * You are given a string S consisting of lowercase and uppercase English letters and digits. Your task is to write a function that reverses the string S without using any built-in string reversal functions.
 *
 * Input:
 * The first line contains a single integer T (1 ≤ T ≤ 100), representing the number of test cases.
 * For each test case, there is one string S (1 ≤ |S| ≤ 10^5) representing the string to reverse.
 *
 * Output:
 * For each test case, output the reversed string.
 *
 * Constraints:
 * The total length of all strings across all test cases will not exceed 10^6.
 * The string will only contain English letters (both uppercase and lowercase) and digits.
 */

function reverseString(str) {
  let reverseStr = "";
  for (const string of str) {
    reverseStr = string + reverseStr;
  }
  return reverseStr;
}

console.log(reverseString("hello world"));
