/**
 * @see https://leetcode.com/problems/search-insert-position
 *
 * ### Problem
 *
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 *
 * You must write an algorithm with `O(log n)` runtime complexity.
 *
 * **Constraints:**
 * - `1 <= nums.length <= 10^4`
 * - `-10^4 <= nums[i] <= 10^4`
 * - `nums` contains **distinct** values sorted in **ascending** order.
 * - `-10^4 <= target <= 10^4`
 *
 * ***
 * ### Solution
 *
 * Binary Search: returns the final left boundary as the insertion index.
 *
 * - Time Complexity: O(log n)
 * - Space Complexity: O(1)
 */
export function searchInsert(nums: number[], target: number): number {
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

  return leftIdx;
}
