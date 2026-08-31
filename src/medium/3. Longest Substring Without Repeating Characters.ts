/**
 * @see https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * Given a string `s`, find the length of the **longest substring** without duplicate characters.
 *
 * > #### Substring
 * > ***
 * > A **substring** is a contiguous **non-empty** sequence of characters within a string.
 *
 * ***
 * **Constraints:**
 * - `0 <= s.length <= 10^5`
 * - `s` consists of English letters, digits, symbols and spaces.
 */
export function lengthOfLongestSubstring(s: string): number {
  if (!s.length) {
    return 0;
  }

  const windowChars = new Set<string>();

  let maxLen = 0;
  let leftIdx = 0;
  let rightIdx = 0;

  while (rightIdx < s.length) {
    const rightChar = s[rightIdx];

    if (!windowChars.has(rightChar)) {
      windowChars.add(rightChar);
      maxLen = Math.max(maxLen, windowChars.size);
      rightIdx++;
    } else {
      windowChars.delete(s[leftIdx]);
      leftIdx++;
    }
  }

  return maxLen;
}

export function lengthOfLongestSubstringWithLastSeenIndex(s: string): number {
  if (!s.length) {
    return 0;
  }

  const lastSeenIdxByChar = new Map<string, number>();

  let maxLen = 0;
  let leftIdx = 0;
  let rightIdx = 0;

  while (rightIdx < s.length) {
    const rightChar = s[rightIdx];

    if (lastSeenIdxByChar.has(rightChar)) {
      leftIdx = Math.max(leftIdx, lastSeenIdxByChar.get(rightChar)! + 1);
    }

    lastSeenIdxByChar.set(rightChar, rightIdx);
    maxLen = Math.max(maxLen, rightIdx - leftIdx + 1);
    rightIdx++;
  }

  return maxLen;
}
