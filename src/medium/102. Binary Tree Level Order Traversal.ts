import { TreeNode } from "~/types/TreeNode";

/**
 * @see https://leetcode.com/problems/binary-tree-level-order-traversal
 *
 * ### Problem
 *
 * Given the `root` of a binary tree, return *the level order traversal of its nodes' values*.
 * (i.e., from left to right, level by level).
 *
 * **Constraints:**
 * - The number of nodes in the tree is in the range `[0, 2000]`.
 * - `-1000 <= Node.val <= 1000`
 *
 * ***
 * ### Solution
 *
 * Breadth-First Search: uses an array queue with Array.shift().
 *
 * - Time Complexity: O(n^2)
 * - Space Complexity: O(n)
 */
export function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }

  const result: number[][] = [];
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const levelSize = queue.length;
    const levelVals: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;

      levelVals.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(levelVals);
  }

  return result;
}

/**
 * ### Alternative Solution
 *
 * Breadth-First Search: uses a queue index to avoid Array.shift().
 *
 * - Time Complexity: O(n)
 * - Space Complexity: O(n)
 */
export function levelOrderTimeOptimized(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }

  const result: number[][] = [];
  const queue: TreeNode[] = [root];

  let queueIdx = 0;

  while (queueIdx < queue.length) {
    const levelSize = queue.length - queueIdx;
    const levelVals: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue[queueIdx];
      queueIdx++;

      levelVals.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(levelVals);
  }

  return result;
}
