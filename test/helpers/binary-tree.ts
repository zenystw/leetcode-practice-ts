import { TreeNode } from "~/types/TreeNode";

export function arrayToTree(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0 || arr[0] === null) {
    return null;
  }

  const root = new TreeNode(arr[0]);
  const queue: TreeNode[] = [root];

  let queueIdx = 0;
  let idx = 1;

  while (queueIdx < queue.length && idx < arr.length) {
    const node = queue[queueIdx];
    queueIdx++;

    const leftVal = arr[idx++];
    if (leftVal !== undefined && leftVal !== null) {
      node.left = new TreeNode(leftVal);
      queue.push(node.left);
    }

    const rightVal = arr[idx++];
    if (rightVal !== undefined && rightVal !== null) {
      node.right = new TreeNode(rightVal);
      queue.push(node.right);
    }
  }

  return root;
}

export function treeToArray(root: TreeNode | null): (number | null)[] {
  if (root === null) {
    return [];
  }

  const arr: (number | null)[] = [];
  const queue: (TreeNode | null)[] = [root];

  let queueIdx = 0;

  while (queueIdx < queue.length) {
    const node = queue[queueIdx];
    queueIdx++;

    if (node === null) {
      arr.push(null);
      continue;
    }

    arr.push(node.val);
    queue.push(node.left);
    queue.push(node.right);
  }

  while (arr[arr.length - 1] === null) {
    arr.pop();
  }

  return arr;
}

/**
 * Creates a deep copy of a binary tree.
 *
 * @param root Root node of the binary tree to clone, or `null`
 * @returns Root node of the cloned binary tree, or `null` when `root` is `null`
 */
export function cloneTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }

  const clonedRoot = new TreeNode(root.val);
  const queue: [TreeNode, TreeNode][] = [[root, clonedRoot]];

  let queueIdx = 0;

  while (queueIdx < queue.length) {
    const [sourceNode, clonedNode] = queue[queueIdx];
    queueIdx++;

    if (sourceNode.left) {
      clonedNode.left = new TreeNode(sourceNode.left.val);
      queue.push([sourceNode.left, clonedNode.left]);
    }

    if (sourceNode.right) {
      clonedNode.right = new TreeNode(sourceNode.right.val);
      queue.push([sourceNode.right, clonedNode.right]);
    }
  }

  return clonedRoot;
}
