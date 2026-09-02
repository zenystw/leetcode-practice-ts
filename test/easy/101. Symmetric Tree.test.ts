import { describe, expect, it } from "vitest";
import type { TestCase } from "../types";
import { arrayToTree, treeToArray } from "../helpers/binary-tree";
import { isSymmetric } from "~/easy/101. Symmetric Tree";

type Solution = typeof isSymmetric;

const cases = [
  {
    input: [arrayToTree([1, 2, 2, 3, 4, 4, 3])],
    output: true,
  },
  {
    input: [arrayToTree([1, 2, 2, null, 3, null, 3])],
    output: false,
  },
] satisfies TestCase<Solution>[];

describe("101. Symmetric Tree", () => {
  cases.forEach(({ input, output }) => {
    it(`returns ${output} for root ${JSON.stringify(treeToArray(input[0]))}`, () => {
      expect(isSymmetric(...input)).toBe(output);
    });
  });
});
