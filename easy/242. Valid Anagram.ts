/**
 * @see https://leetcode.com/problems/valid-anagram/
 *
 * Given two strings `s` and `t`, return `true` if `t` is an **anagram** of `s`, and `false` otherwise.
 *
 * > **anagram:** An anagram of a string is another string that contains the same characters, only the order of characters can be different.
 *
 * ***
 * **Constraints:**
 * - `1 <= s.length, t.length <= 5 * 10^4`
 * - `s` and `t` consist of lowercase English letters.
 *
 * **Follow up:** What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
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

export function isAnagramByCounting(s: string, t: string): boolean {
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

export function isAnagramBySorting(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  return s.split("").sort().join("") === t.split("").sort().join("");
}
