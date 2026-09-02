import { ListNode } from "~/types/ListNode";

export function arrayToList(arr: number[]): ListNode | null {
  if (arr.length === 0) {
    return null;
  }

  const dummyNode = new ListNode();

  let curNode = dummyNode;

  arr.forEach((val) => {
    curNode.next = new ListNode(val);
    curNode = curNode.next;
  });

  return dummyNode.next;
}

export function listToArray(head: ListNode | null): number[] {
  if (head === null) {
    return [];
  }

  const arr: number[] = [];

  let curNode: ListNode | null = head;

  while (curNode) {
    arr.push(curNode.val);
    curNode = curNode.next;
  }

  return arr;
}

interface CyclicListObject {
  arr: number[];
  pos: number;
}

export function objectToCyclicList({
  arr,
  pos,
}: CyclicListObject): ListNode | null {
  const head = arrayToList(arr);

  if (head === null || pos === -1) {
    return head;
  }

  let curNode = head;
  let cycleNode: ListNode | null = null;
  let idx = 0;

  while (curNode.next) {
    if (idx === pos) {
      cycleNode = curNode;
    }

    curNode = curNode.next;
    idx++;
  }

  if (idx === pos) {
    cycleNode = curNode;
  }

  curNode.next = cycleNode;

  return head;
}

export function cyclicListToObject(head: ListNode | null): CyclicListObject {
  if (head === null) {
    return {
      arr: [],
      pos: -1,
    };
  }

  const arr: number[] = [];
  const nodeIdxMap = new Map<ListNode, number>();

  let curNode: ListNode | null = head;

  while (curNode) {
    const pos = nodeIdxMap.get(curNode);

    if (pos !== undefined) {
      return {
        arr,
        pos,
      };
    }

    nodeIdxMap.set(curNode, arr.length);
    arr.push(curNode.val);
    curNode = curNode.next;
  }

  return {
    arr,
    pos: -1,
  };
}

/**
 * Creates a deep copy of a singly linked list.
 *
 * @param head Head node of the linked list to clone, or `null`
 * @returns Head node of the cloned linked list, or `null` when `head` is `null`
 */
export function cloneList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  const clonedHead = new ListNode(head.val);

  let clonedNode = clonedHead;
  let sourceNode = head.next;

  while (sourceNode) {
    clonedNode.next = new ListNode(sourceNode.val);
    clonedNode = clonedNode.next;
    sourceNode = sourceNode.next;
  }

  return clonedHead;
}
