/* 
    ## Requirements:
    -  Write a function factorial(n) that calculates the factorial of a non-negative integer n
    ## Constraints:
    - The function should handle edge cases (like 0!) and should be efficient for the maximum input of 20.
*/

/**
 * Calculates the factorial of a non-negative integer n
 * @param {number} number - positive integer
 * @returns {number} the factorial of the input number
 */
function factorial(number) {
  let result = 1;
  if (number < 0) {
    return "Not defined for negative numbers";
  }

  if (number === 0) {
    return 1;
  }

  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(-1));
console.log(factorial(100));
