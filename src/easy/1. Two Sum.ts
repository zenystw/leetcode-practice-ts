/**
 * @see https://leetcode.com/problems/two-sum
 *
 * ### Problem
 *
 * Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`.*
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * **Constraints:**
 * - `2 <= nums.length <= 10^4`
 * - `-10^9 <= nums[i] <= 10^9`
 * - `-10^9 <= target <= 10^9`
 * - **Only one valid answer exists.**
 *
 * **Follow-up:** Can you come up with an algorithm that is less than `O(n^2)` time complexity?
 *
 * ***
 * ### Solution
 *
 * Looks up each number's required number in one pass.
 *
 * - Time Complexity: O(n)
 * - Space Complexity: O(n)
 */
export function twoSum(nums: number[], target: number): number[] {
  const lastSeenIdxByNum = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i];
    const requiredNum = target - curNum;

    if (lastSeenIdxByNum.has(requiredNum)) {
      return [i, lastSeenIdxByNum.get(requiredNum)!];
    }

    lastSeenIdxByNum.set(curNum, i);
  }

  return [];
}
