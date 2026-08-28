/**
 * @see https://leetcode.com/problems/palindrome-number/
 *
 * Given an integer `x`, return `true` if `x` is a **palindrome**, and `false` otherwise.
 *
 * > **palindrome:** An integer is a palindrome when it reads the same forward and backward.
 * > For example, `121` is a palindrome while `123` is not.
 *
 * ***
 * **Constraints:**
 * - `-2^31 <= x <= 2^31 - 1`
 */
export function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  } else if (x < 10) {
    return true;
  } else {
    const chars = x.toString();

    let leftIdx = 0;
    let rightIdx = chars.length - 1;

    while (rightIdx > leftIdx) {
      if (chars[leftIdx] !== chars[rightIdx]) {
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
    let revNum = 0;
    let num = x;

    while (num !== 0) {
      revNum = revNum * 10 + (num % 10);
      num = Math.floor(num / 10);
    }

    return revNum === x;
  }
}
