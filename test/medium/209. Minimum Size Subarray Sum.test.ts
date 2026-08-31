import { describe, expect, it } from "vitest";
import type { TestCase } from "../types";
import { minSubArrayLen } from "~/medium/209. Minimum Size Subarray Sum";

type Solution = typeof minSubArrayLen;

const cases = [
  {
    input: [7, [2, 3, 1, 2, 4, 3]],
    output: 2,
  },
  {
    input: [4, [1, 4, 4]],
    output: 1,
  },
  {
    input: [11, [1, 1, 1, 1, 1, 1, 1, 1]],
    output: 0,
  },
] satisfies TestCase<Solution>[];

describe("209. Minimum Size Subarray Sum", () => {
  cases.forEach(({ input, output }) => {
    it(`returns ${output} for target ${input[0]} and nums ${JSON.stringify(input[1])}`, () => {
      expect(minSubArrayLen(...input)).toBe(output);
    });
  });
});
