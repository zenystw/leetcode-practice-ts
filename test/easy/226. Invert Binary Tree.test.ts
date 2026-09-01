import { describe, expect, it } from "vitest";
import type { TestCase } from "../types";
import { arrayToTree, treeToArray } from "../helpers/binary-tree";
import { invertTree } from "~/easy/226. Invert Binary Tree";

type Solution = typeof invertTree;

const cases = [
  {
    input: [arrayToTree([4, 2, 7, 1, 3, 6, 9])],
    output: arrayToTree([4, 7, 2, 9, 6, 3, 1]),
  },
  {
    input: [arrayToTree([2, 1, 3])],
    output: arrayToTree([2, 3, 1]),
  },
  {
    input: [arrayToTree([])],
    output: arrayToTree([]),
  },
] satisfies TestCase<Solution>[];

describe("226. Invert Binary Tree", () => {
  cases.forEach(({ input, output }) => {
    it(`returns ${JSON.stringify(treeToArray(output))} for root ${JSON.stringify(
      treeToArray(input[0])
    )}`, () => {
      expect(invertTree(...input)).toEqual(output);
    });
  });
});
