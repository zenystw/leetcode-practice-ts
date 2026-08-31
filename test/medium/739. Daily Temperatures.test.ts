import { describe, expect, it } from "vitest";
import type { TestCase } from "../types";
import { dailyTemperatures } from "~/medium/739. Daily Temperatures";

type Solution = typeof dailyTemperatures;

const cases = [
  {
    input: [[73, 74, 75, 71, 69, 72, 76, 73]],
    output: [1, 1, 4, 2, 1, 1, 0, 0],
  },
  {
    input: [[30, 40, 50, 60]],
    output: [1, 1, 1, 0],
  },
  {
    input: [[30, 60, 90]],
    output: [1, 1, 0],
  },
] satisfies TestCase<Solution>[];

describe("739. Daily Temperatures", () => {
  cases.forEach(({ input, output }) => {
    it(`returns ${JSON.stringify(output)} for temperatures ${JSON.stringify(input[0])}`, () => {
      expect(dailyTemperatures(...input)).toEqual(output);
    });
  });
});
