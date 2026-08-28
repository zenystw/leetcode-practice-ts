/**
 * @see https://leetcode.com/problems/two-sum/
 *
 * Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`.*
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * ***
 * **Constraints:**
 * - `2 <= nums.length <= 10^4`
 * - `-10^9 <= nums[i] <= 10^9`
 * - `-10^9 <= target <= 10^9`
 * - **Only one valid answer exists.**
 */
export function twoSum(nums: number[], target: number): number[] {
  const checked = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i]!;
    const anrNum = target - curNum;

    if (checked.has(anrNum)) {
      return [checked.get(anrNum)!, i];
    }

    checked.set(curNum, i);
  }

  return [];
}
