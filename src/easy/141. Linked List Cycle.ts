import { ListNode } from "~/types/ListNode";

/**
 * @see https://leetcode.com/problems/linked-list-cycle
 *
 * ### Problem
 *
 * Given `head`, the head of a linked list, determine if the linked list has a cycle in it.
 *
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer.
 * Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to.
 * **Note that `pos` is not passed as a parameter**.
 *
 * Return `true`* if there is a cycle in the linked list*. Otherwise, return `false`.
 *
 * **Constraints:**
 * - The number of the nodes in the list is in the range `[0, 10^4]`.
 * - `-10^5 <= Node.val <= 10^5`
 * - `pos` is `-1` or a **valid index** in the linked-list.
 *
 * **Follow-up:** Can you solve it using `O(1)` (i.e. constant) memory?
 *
 * ***
 * ### Solution
 *
 * Fast & Slow Pointers: moves two pointers at different speeds and detects a cycle if they eventually meet.
 *
 * - Time Complexity: O(n)
 * - Space Complexity: O(1)
 */
export function hasCycle(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return false;
  }

  let fastNode: ListNode | null = head;
  let slowNode: ListNode | null = head;

  while (fastNode !== null && fastNode.next !== null) {
    fastNode = fastNode.next.next;
    slowNode = slowNode!.next;

    if (fastNode === slowNode) {
      return true;
    }
  }

  return false;
}
