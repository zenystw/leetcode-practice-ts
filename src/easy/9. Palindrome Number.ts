/**
 * @see https://leetcode.com/problems/palindrome-number
 *
 * ### Problem
 *
 * Given an integer `x`, return `true` if `x` is a **palindrome**, and `false` otherwise.
 *
 * > #### Palindrome
 * > ***
 * > An integer is a **palindrome** when it reads the same forward and backward.
 * >
 * > For example, `121` is a palindrome while `123` is not.
 *
 * **Constraints:**
 * - `-2^31 <= x <= 2^31 - 1`
 *
 * **Follow-up:** Could you solve it without converting the integer to a string?
 *
 * ***
 * ### Solution
 *
 * Two Pointers: converts the number to a string, then compares characters from both ends.
 *
 * - Time Complexity: O(d), where `d` is the number of digits
 * - Space Complexity: O(d), where `d` is the number of digits
 */
export function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  if (x < 10) {
    return true;
  }

  const str = x.toString();

  let leftIdx = 0;
  let rightIdx = str.length - 1;

  while (leftIdx < rightIdx) {
    if (str[leftIdx] !== str[rightIdx]) {
      return false;
    }

    leftIdx++;
    rightIdx--;
  }

  return true;
}

/**
 * ### Follow-up Solution
 *
 * Reverses the number digit by digit and compares it with the input.
 *
 * - Time Complexity: O(d), where `d` is the number of digits
 * - Space Complexity: O(1)
 */
export function isPalindromeByReversingNumber(x: number): boolean {
  if (x < 0) {
    return false;
  }

  if (x < 10) {
    return true;
  }

  let reversedX = 0;
  let remainingX = x;

  while (remainingX !== 0) {
    reversedX = reversedX * 10 + (remainingX % 10);
    remainingX = Math.floor(remainingX / 10);
  }

  return reversedX === x;
}
