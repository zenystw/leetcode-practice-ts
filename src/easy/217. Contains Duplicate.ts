/**
 * @see https://leetcode.com/problems/contains-duplicate
 *
 * Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.
 *
 * ***
 * **Constraints:**
 * - `1 <= nums.length <= 10^5`
 * - `-10^9 <= nums[i] <= 10^9`
 */
export function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}

export function containsDuplicateByIterating(nums: number[]): boolean {
  const seen = new Set<number>();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}
