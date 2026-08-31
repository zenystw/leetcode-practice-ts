/**
 * @see https://leetcode.com/problems/valid-parentheses
 *
 * Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 *
 * ***
 * **Constraints:**
 * - `1 <= s.length <= 10^4`
 * - `s` consists of parentheses only `'()[]{}'`.
 */
export function isValid(s: string): boolean {
  const closingByOpening = new Map<string, string>([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  const expectedClosings: string[] = [];

  for (const char of s) {
    if (closingByOpening.has(char)) {
      expectedClosings.push(closingByOpening.get(char)!);
    } else if (char !== expectedClosings.pop()) {
      return false;
    }
  }

  return expectedClosings.length === 0;
}
