/**
 * @see https://leetcode.com/problems/valid-palindrome
 *
 * ### Problem
 *
 * A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 *
 * Given a string `s`, return `true` *if it is a **palindrome**, or `false` otherwise*.
 *
 * **Constraints:**
 * - `1 <= s.length <= 2 * 10^5`
 * - `s` consists only of printable ASCII characters.
 *
 * ***
 * ### Solution
 *
 * Two Pointers: normalizes the full string to lowercase before comparing.
 *
 * - Time Complexity: O(n)
 * - Space Complexity: O(n)
 */
export function isPalindrome(s: string): boolean {
  const str = s.toLowerCase();

  let leftIdx = 0;
  let rightIdx = str.length - 1;

  const isAlphanumeric = (char: string) => {
    const charCode = char.charCodeAt(0);
    return (
      (charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0)) ||
      (charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0)) ||
      (charCode >= "0".charCodeAt(0) && charCode <= "9".charCodeAt(0))
    );
  };

  while (leftIdx < rightIdx) {
    if (!isAlphanumeric(str[leftIdx])) {
      leftIdx++;
      continue;
    }

    if (!isAlphanumeric(str[rightIdx])) {
      rightIdx--;
      continue;
    }

    if (str[leftIdx] !== str[rightIdx]) {
      return false;
    }

    leftIdx++;
    rightIdx--;
  }

  return true;
}

/**
 * ### Alternative Solution
 *
 * Two Pointers: lowercases characters only when comparing them.
 *
 * - Time Complexity: O(n)
 * - Space Complexity: O(1)
 */
export function isPalindromeSpaceOptimized(s: string): boolean {
  let leftIdx = 0;
  let rightIdx = s.length - 1;

  const isAlphanumeric = (char: string) => {
    const charCode = char.charCodeAt(0);
    return (
      (charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0)) ||
      (charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0)) ||
      (charCode >= "0".charCodeAt(0) && charCode <= "9".charCodeAt(0))
    );
  };

  while (leftIdx < rightIdx) {
    if (!isAlphanumeric(s[leftIdx])) {
      leftIdx++;
      continue;
    }

    if (!isAlphanumeric(s[rightIdx])) {
      rightIdx--;
      continue;
    }

    if (s[leftIdx].toLowerCase() !== s[rightIdx].toLowerCase()) {
      return false;
    }

    leftIdx++;
    rightIdx--;
  }

  return true;
}
