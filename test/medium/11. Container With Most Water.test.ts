import { describe, expect, it } from "vitest";
import type { TestCase } from "../types";
import { maxArea } from "~/medium/11. Container With Most Water";

type Solution = typeof maxArea;

const cases = [
  {
    input: [[1, 8, 6, 2, 5, 4, 8, 3, 7]],
    output: 49,
  },
  {
    input: [[1, 1]],
    output: 1,
  },
] satisfies TestCase<Solution>[];

describe("11. Container With Most Water", () => {
  cases.forEach(({ input, output }) => {
    it(`returns ${output} for height ${JSON.stringify(input[0])}`, () => {
      expect(maxArea(...input)).toBe(output);
    });
  });
});
