/**
 * @see https://leetcode.com/problems/longest-common-prefix/
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string `""`.
 *
 * ***
 * **Constraints:**
 * - `1 <= strs.length <= 200`
 * - `0 <= strs[i].length <= 200`
 * - `strs[i]` consists of only lowercase English letters if it is non-empty.
 */
export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) {
    return strs[0];
  }

  let firstStr = strs[0];
  if (!firstStr) {
    return "";
  }

  for (let i = 1; i < strs.length; i++) {
    let curStr = strs[i];
    if (!curStr) {
      return "";
    }

    while (firstStr !== curStr) {
      if (!firstStr) {
        return "";
      }

      if (firstStr.length > curStr.length) {
        firstStr = firstStr.slice(0, curStr.length);
      } else if (firstStr.length < curStr.length) {
        curStr = curStr.slice(0, firstStr.length);
      } else {
        firstStr = firstStr.slice(0, firstStr.length - 1);
        curStr = curStr.slice(0, curStr.length - 1);
      }
    }
  }

  return firstStr;
}
