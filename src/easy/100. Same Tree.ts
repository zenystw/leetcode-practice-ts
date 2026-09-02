import { TreeNode } from "~/types/TreeNode";

/**
 * @see https://leetcode.com/problems/same-tree
 *
 * ### Problem
 *
 * Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.
 *
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 *
 * **Constraints:**
 * - The number of nodes in both trees is in the range `[0, 100]`.
 * - `-10^4 <= Node.val <= 10^4`
 *
 * ***
 * ### Solution
 *
 * Depth-First Search: recursively compares corresponding nodes in both trees.
 *
 * - Time Complexity: O(n)
 * - Space Complexity: O(h), where `h` is the height of the tree
 */
export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null || q === null) {
    return p === q;
  }

  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
}
