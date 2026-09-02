import { describe, expect, it } from "vitest";
import type { TestCase } from "../types";
import { arrayToTree, treeToArray } from "../helpers/binary-tree";
import { isSameTree } from "~/easy/100. Same Tree";

type Solution = typeof isSameTree;

const cases = [
  {
    input: [arrayToTree([1, 2, 3]), arrayToTree([1, 2, 3])],
    output: true,
  },
  {
    input: [arrayToTree([1, 2]), arrayToTree([1, null, 2])],
    output: false,
  },
  {
    input: [arrayToTree([1, 2, 1]), arrayToTree([1, 1, 2])],
    output: false,
  },
] satisfies TestCase<Solution>[];

describe("100. Same Tree", () => {
  cases.forEach(({ input, output }) => {
    it(`returns ${output} for p ${JSON.stringify(
      treeToArray(input[0])
    )} and q ${JSON.stringify(treeToArray(input[1]))}`, () => {
      expect(isSameTree(...input)).toBe(output);
    });
  });
});
