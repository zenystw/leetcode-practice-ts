/**
 * @see https://leetcode.com/problems/valid-anagram
 *
 * ### Problem
 *
 * Given two strings `s` and `t`, return `true` if `t` is an **anagram** of `s`, and `false` otherwise.
 *
 * > #### Anagram
 * > ***
 * > An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.
 *
 * **Constraints:**
 * - `1 <= s.length, t.length <= 5 * 10^4`
 * - `s` and `t` consist of lowercase English letters.
 *
 * **Follow-up:** What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 *
 * ***
 * ### Solution
 *
 * Counts lowercase English letters with a fixed-size array.
 *
 * - Time Complexity: O(n)
 * - Space Complexity: O(1)
 */
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const counts = new Array<number>(26).fill(0);
  const aCharCode = "a".charCodeAt(0);

  for (const char of s) {
    const idx = char.charCodeAt(0) - aCharCode;
    counts[idx]++;
  }

  for (const char of t) {
    const idx = char.charCodeAt(0) - aCharCode;
    counts[idx]--;
  }

  return counts.every((count) => count === 0);
}

/**
 * ### Follow-up Solution
 *
 * Counts character frequencies with a Map.
 *
 * - Time Complexity: O(n)
 * - Space Complexity: O(k), where `k` is the number of distinct characters
 */
export function isAnagramWithFrequencyMap(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const countByChar = new Map<string, number>();

  for (const char of s) {
    if (!countByChar.has(char)) {
      countByChar.set(char, 1);
    } else {
      const count = countByChar.get(char)! + 1;
      countByChar.set(char, count);
    }
  }

  for (const char of t) {
    if (!countByChar.has(char)) {
      return false;
    } else {
      const count = countByChar.get(char)! - 1;
      if (!count) {
        countByChar.delete(char);
      } else {
        countByChar.set(char, count);
      }
    }
  }

  return !countByChar.size;
}

/**
 * ### Alternative Solution
 *
 * Compares both strings after sorting their characters.
 *
 * - Time Complexity: O(n log n)
 * - Space Complexity: O(n)
 */
export function isAnagramBySorting(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  return s.split("").sort().join("") === t.split("").sort().join("");
}
