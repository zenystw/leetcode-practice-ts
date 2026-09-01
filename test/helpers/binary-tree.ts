import { TreeNode } from "~/types/TreeNode";

export function arrayToTree(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0 || arr[0] === null) {
    return null;
  }

  const root = new TreeNode(arr[0]);
  const queue: TreeNode[] = [root];

  let idx = 1;

  while (queue.length > 0 && idx < arr.length) {
    const node = queue.shift()!;

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

  while (queue.length > 0) {
    const node = queue.shift()!;

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
