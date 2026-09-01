import { describe, expect, it } from "vitest";
import type { TestCase } from "../types";
import { arrayToTree } from "../helpers/binary-tree";
import {
  levelOrder,
  levelOrderTimeOptimized,
} from "~/medium/102. Binary Tree Level Order Traversal";

type Solution = typeof levelOrder;

const cases = [
  {
    input: [arrayToTree([3, 9, 20, null, null, 15, 7])],
    output: [[3], [9, 20], [15, 7]],
  },
  {
    input: [arrayToTree([1])],
    output: [[1]],
  },
  {
    input: [arrayToTree([])],
    output: [],
  },
] satisfies TestCase<Solution>[];

describe("102. Binary Tree Level Order Traversal", () => {
  describe("levelOrder", () => {
    runCases(levelOrder);
  });

  describe("levelOrderTimeOptimized", () => {
    runCases(levelOrderTimeOptimized);
  });
});

function runCases(solution: Solution): void {
  cases.forEach(({ input, output }) => {
    it(`returns ${JSON.stringify(output)}`, () => {
      expect(solution(...input)).toEqual(output);
    });
  });
}
