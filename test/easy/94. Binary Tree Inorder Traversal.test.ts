import { describe, expect, it } from "vitest";
import type { TestCase } from "../types";
import { arrayToTree, treeToArray } from "../helpers/binary-tree";
import { inorderTraversal } from "~/easy/94. Binary Tree Inorder Traversal";

type Solution = typeof inorderTraversal;

const cases = [
  {
    input: [arrayToTree([1, null, 2, 3])],
    output: [1, 3, 2],
  },
  {
    input: [arrayToTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9])],
    output: [4, 2, 6, 5, 7, 1, 3, 9, 8],
  },
  {
    input: [arrayToTree([])],
    output: [],
  },
  {
    input: [arrayToTree([1])],
    output: [1],
  },
] satisfies TestCase<Solution>[];

describe("94. Binary Tree Inorder Traversal", () => {
  cases.forEach(({ input, output }) => {
    it(`returns ${JSON.stringify(output)} for root ${JSON.stringify(
      treeToArray(input[0])
    )}`, () => {
      expect(inorderTraversal(...input)).toEqual(output);
    });
  });
});
