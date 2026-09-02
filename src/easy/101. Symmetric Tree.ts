import { TreeNode } from "~/types/TreeNode";

/**
 * @see https://leetcode.com/problems/symmetric-tree
 *
 * ### Problem
 *
 * Given the `root` of a binary tree, *check whether it is a mirror of itself* (i.e., symmetric around its center).
 *
 * **Constraints:**
 * - The number of nodes in the tree is in the range `[1, 1000]`.
 * - `-100 <= Node.val <= 100`
 *
 * **Follow-up:** Could you solve it both recursively and iteratively?
 *
 * ***
 * ### Solution
 *
 * Depth-First Search: recursively compares mirrored nodes from the left and right subtrees.
 *
 * - Time Complexity: O(n)
 * - Space Complexity: O(h), where `h` is the height of the tree
 */
export function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }

  const isMirror = (p: TreeNode | null, q: TreeNode | null): boolean => {
    if (p === null || q === null) {
      return p === q;
    }

    return (
      p.val === q.val && isMirror(p.left, q.right) && isMirror(p.right, q.left)
    );
  };

  return isMirror(root.left, root.right);
}

/**
 * @todo Implement this solution iteratively.
 *
 * ### Follow-up Solution
 *
 * - Time Complexity:
 * - Space Complexity:
 */
