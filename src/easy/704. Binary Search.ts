/**
 * @see https://leetcode.com/problems/binary-search
 *
 * ### Problem
 *
 * Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`.
 * If `target` exists, then return its index.
 * Otherwise, return `-1`.
 *
 * You must write an algorithm with `O(log n)` runtime complexity.
 *
 * **Constraints:**
 * - `1 <= nums.length <= 10^4`
 * - `-10^4 < nums[i], target < 10^4`
 * - All the integers in `nums` are **unique**.
 * - `nums` is sorted in ascending order.
 *
 * ***
 * ### Solution
 *
 * Binary Search: searches a sorted array iteratively.
 *
 * - Time Complexity: O(log n)
 * - Space Complexity: O(1)
 */
export function search(nums: number[], target: number): number {
  let leftIdx = 0;
  let rightIdx = nums.length - 1;

  while (leftIdx <= rightIdx) {
    const midIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2);
    const midNum = nums[midIdx];

    if (target > midNum) {
      leftIdx = midIdx + 1;
    } else if (target < midNum) {
      rightIdx = midIdx - 1;
    } else {
      return midIdx;
    }
  }

  return -1;
}
