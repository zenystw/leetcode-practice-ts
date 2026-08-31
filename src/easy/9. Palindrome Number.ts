/**
 * @see https://leetcode.com/problems/palindrome-number
 *
 * Given an integer `x`, return `true` if `x` is a **palindrome**, and `false` otherwise.
 *
 * > #### Palindrome
 * > ***
 * > An integer is a **palindrome** when it reads the same forward and backward.
 * >
 * > For example, `121` is a palindrome while `123` is not.
 *
 * ***
 * **Constraints:**
 * - `-2^31 <= x <= 2^31 - 1`
 *
 * **Follow up:** Could you solve it without converting the integer to a string?
 */
export function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  } else if (x < 10) {
    return true;
  } else {
    const str = x.toString();

    let leftIdx = 0;
    let rightIdx = str.length - 1;

    while (rightIdx > leftIdx) {
      if (str[leftIdx] !== str[rightIdx]) {
        return false;
      }

      leftIdx++;
      rightIdx--;
    }

    return true;
  }
}

export function isPalindromeByReversingNumber(x: number): boolean {
  if (x < 0) {
    return false;
  } else if (x < 10) {
    return true;
  } else {
    let reversedX = 0;
    let remainingX = x;

    while (remainingX !== 0) {
      reversedX = reversedX * 10 + (remainingX % 10);
      remainingX = Math.floor(remainingX / 10);
    }

    return reversedX === x;
  }
}
