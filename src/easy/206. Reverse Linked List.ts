import { ListNode } from "~/types/ListNode";

/**
 * @see https://leetcode.com/problems/reverse-linked-list
 *
 * ### Problem
 *
 * Given the `head` of a singly linked list, reverse the list, and return *the reversed list*.
 *
 * **Constraints:**
 * - The number of nodes in the list is the range `[0, 5000]`.
 * - `-5000 <= Node.val <= 5000`
 *
 * **Follow-up:** A linked list can be reversed either iteratively or recursively. Could you implement both?
 *
 * ***
 * ### Solution
 *
 * Reverses each node's `next` pointer while traversing the list.
 *
 * - Time Complexity: O(n)
 * - Space Complexity: O(1)
 */
export function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  let prevNode: ListNode | null = null;
  let curNode: ListNode | null = head;

  while (curNode) {
    const nextNode: ListNode | null = curNode.next;

    curNode.next = prevNode;
    prevNode = curNode;
    curNode = nextNode;
  }

  return prevNode;
}

/**
 * ### Follow-up Solution
 *
 * Reverses each node's `next` pointer while recursively traversing the list.
 *
 * - Time Complexity: O(n)
 * - Space Complexity: O(n)
 */
export function reverseListByRecursion(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  let prevNode: ListNode | null = null;

  const reverse = (node: ListNode | null): void => {
    if (node === null) {
      return;
    }

    const nextNode = node.next;

    node.next = prevNode;
    prevNode = node;

    reverse(nextNode);
  };

  reverse(head);

  return prevNode;
}
