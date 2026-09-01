/**
 * @see https://leetcode.com/problems/contains-duplicate
 *
 * ### Problem
 *
 * Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.
 *
 * **Constraints:**
 * - `1 <= nums.length <= 10^5`
 * - `-10^9 <= nums[i] <= 10^9`
 *
 * ***
 * ### Solution
 *
 * Builds a Set from all values and compares its size with the input length.
 *
 * - Time Complexity: O(n)
 * - Space Complexity: O(n)
 */
export function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}

/**
 * ### Alternative Solution
 *
 * Tracks seen values and returns when the first duplicate is found.
 *
 * - Time Complexity: O(n)
 * - Space Complexity: O(n)
 */
export function containsDuplicateWithEarlyExit(nums: number[]): boolean {
  const seen = new Set<number>();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}
