/**
 * @see https://leetcode.com/problems/minimum-size-subarray-sum
 *
 * Given an array of positive integers `nums` and a positive integer `target`, return *the minimal length of a subarray whose sum is greater than or equal to* `target`.
 * If there is no such subarray, return `0` instead.
 *
 * > #### Subarray
 * > ***
 * > A **subarray** is a contiguous **non-empty** sequence of elements within an array.
 *
 * ***
 * **Constraints:**
 * - `1 <= target <= 10^9`
 * - `1 <= nums.length <= 10^5`
 * - `1 <= nums[i] <= 10^4`
 *
 * **Follow up:** If you have figured out the `O(n)` solution, try coding another solution of which the time complexity is `O(n log(n))`.
 */
export function minSubArrayLen(target: number, nums: number[]): number {
  let minLen = nums.length + 1;
  let leftIdx = 0;
  let rightIdx = 0;
  let windowSum = 0;

  while (rightIdx < nums.length) {
    windowSum += nums[rightIdx];

    while (windowSum >= target) {
      minLen = Math.min(minLen, rightIdx - leftIdx + 1);
      windowSum -= nums[leftIdx];
      leftIdx++;
    }

    rightIdx++;
  }

  return minLen === nums.length + 1 ? 0 : minLen;
}
