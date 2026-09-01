import { TreeNode } from "~/types/TreeNode";

/**
 * @see https://leetcode.com/problems/maximum-depth-of-binary-tree
 *
 * ### Problem
 *
 * Given the `root` of a binary tree, return *its maximum depth*.
 *
 * A binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.
 *
 * **Constraints:**
 * - The number of nodes in the tree is in the range `[0, 10^4]`.
 * - `-100 <= Node.val <= 100`
 *
 * ***
 * ### Solution
 *
 * Depth-First Search: recursively finds the maximum depth of each subtree.
 *
 * - Time Complexity: O(n)
 * - Space Complexity: O(h), where `h` is the height of the tree
 */
export function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return 1 + Math.max(leftDepth, rightDepth);
}

/**
 * ### Alternative Solution
 *
 * Breadth-First Search: traverses the tree level by level and counts each processed level.
 *
 * - Time Complexity: O(n^2)
 * - Space Complexity: O(w), where `w` is the maximum width of the tree
 */
export function maxDepthByBFS(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  const queue: TreeNode[] = [root];

  let depth = 0;

  while (queue.length) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    depth++;
  }

  return depth;
}

/**
 * ### Alternative Solution
 *
 * Breadth-First Search: uses a queue index to avoid Array.shift().
 *
 * - Time Complexity: O(n)
 * - Space Complexity: O(n)
 */
export function maxDepthByBFSTimeOptimized(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  const queue: TreeNode[] = [root];

  let queueIdx = 0;
  let depth = 0;

  while (queueIdx < queue.length) {
    const levelSize = queue.length - queueIdx;

    for (let i = 0; i < levelSize; i++) {
      const node = queue[queueIdx];
      queueIdx++;

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    depth++;
  }

  return depth;
}
