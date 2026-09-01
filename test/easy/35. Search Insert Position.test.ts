import { describe, expect, it } from "vitest";
import type { TestCase } from "../types";
import { searchInsert } from "~/easy/35. Search Insert Position";

type Solution = typeof searchInsert;

const cases = [
  {
    input: [[1, 3, 5, 6], 5],
    output: 2,
  },
  {
    input: [[1, 3, 5, 6], 2],
    output: 1,
  },
  {
    input: [[1, 3, 5, 6], 7],
    output: 4,
  },
] satisfies TestCase<Solution>[];

describe("35. Search Insert Position", () => {
  cases.forEach(({ input, output }) => {
    it(`returns ${output} for nums ${JSON.stringify(input[0])} and target ${input[1]}`, () => {
      expect(searchInsert(...input)).toBe(output);
    });
  });
});
