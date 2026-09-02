import { TreeNode } from "~/types/TreeNode";

/**
 * @see https://leetcode.com/problems/binary-tree-inorder-traversal
 *
 * ### Problem
 *
 * Given the `root` of a binary tree, return *the inorder traversal of its nodes' values*.
 *
 * **Constraints:**
 * - The number of nodes in the tree is in the range `[0, 100]`.
 * - `-100 <= Node.val <= 100`
 *
 * **Follow-up:** Recursive solution is trivial, could you do it iteratively?
 *
 * ***
 * ### Solution
 *
 * - Time Complexity:
 * - Space Complexity:
 */
export function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }

  const result: number[] = [];

  const traverse = (node: TreeNode | null) => {
    if (node === null) {
      return;
    }

    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  };

  traverse(root);

  return result;
}

/**
 * @todo Implement this solution iteratively.
 *
 * ### Follow-up Solution
 *
 * - Time Complexity:
 * - Space Complexity:
 */
