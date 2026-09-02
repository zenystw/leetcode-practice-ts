import { TreeNode } from "~/types/TreeNode";

/**
 * @see https://leetcode.com/problems/invert-binary-tree
 *
 * ### Problem
 *
 * Given the `root` of a binary tree, invert the tree, and return *its root*.
 *
 * **Constraints:**
 * - The number of nodes in the tree is in the range `[0, 100]`.
 * - `-100 <= Node.val <= 100`
 *
 * ***
 * ### Solution
 *
 * Depth-First Search: swaps each node's left and right children recursively.
 *
 * - Time Complexity: O(n)
 * - Space Complexity: O(h), where `h` is the height of the tree
 */
export function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }

  const leftNode = root.left;
  root.left = root.right;
  root.right = leftNode;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}

/**
 * @todo Implement this solution.
 *
 * ### Alternative Solution
 *
 * @todo Complete the description of this solution.
 * Breadth-First Search:
 *
 * @todo Add time complexity.
 * - Time Complexity:
 * @todo Add space complexity.
 * - Space Complexity:
 */
