/**
 * @see https://leetcode.com/problems/container-with-most-water
 *
 * ### Problem
 *
 * You are given an integer array `height` of length `n`.
 * There are `n` vertical lines drawn such that the two endpoints of the `i^{th}` line are `(i, 0)` and `(i, height[i])`.
 *
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 *
 * Return *the maximum amount of water a container can store*.
 *
 * **Notice** that you may not slant the container.
 *
 * **Constraints:**
 * - `n == height.length`
 * - `2 <= n <= 10^5`
 * - `0 <= height[i] <= 10^4`
 *
 * ***
 * ### Solution
 *
 * Two Pointers: moves the shorter boundary inward.
 *
 * - Time Complexity: O(n)
 * - Space Complexity: O(1)
 */
export function maxArea(height: number[]): number {
  let maxArea = 0;
  let leftIdx = 0;
  let rightIdx = height.length - 1;

  while (leftIdx < rightIdx) {
    const width = rightIdx - leftIdx;
    const leftHeight = height[leftIdx];
    const rightHeight = height[rightIdx];
    const curArea = width * Math.min(leftHeight, rightHeight);

    maxArea = Math.max(maxArea, curArea);

    if (leftHeight <= rightHeight) {
      leftIdx++;
    }

    if (rightHeight <= leftHeight) {
      rightIdx--;
    }
  }

  return maxArea;
}
