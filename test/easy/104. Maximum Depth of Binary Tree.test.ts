import { describe, expect, it } from "vitest";
import type { TestCase } from "../types";
import { arrayToTree, treeToArray } from "../helpers/binary-tree";
import {
  maxDepth,
  maxDepthByBFS,
  maxDepthByBFSTimeOptimized,
} from "~/easy/104. Maximum Depth of Binary Tree";

type Solution = typeof maxDepth;

const cases = [
  {
    input: [arrayToTree([3, 9, 20, null, null, 15, 7])],
    output: 3,
  },
  {
    input: [arrayToTree([1, null, 2])],
    output: 2,
  },
] satisfies TestCase<Solution>[];

describe("104. Maximum Depth of Binary Tree", () => {
  describe("maxDepth", () => {
    runCases(maxDepth);
  });

  describe("maxDepthByBFS", () => {
    runCases(maxDepthByBFS);
  });

  describe("maxDepthByBFSTimeOptimized", () => {
    runCases(maxDepthByBFSTimeOptimized);
  });
});

function runCases(solution: Solution): void {
  cases.forEach(({ input, output }) => {
    it(`returns ${output} for root ${JSON.stringify(treeToArray(input[0]))}`, () => {
      expect(solution(...input)).toBe(output);
    });
  });
}
