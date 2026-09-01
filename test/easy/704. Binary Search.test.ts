import { describe, expect, it } from "vitest";
import type { TestCase } from "../types";
import { search } from "~/easy/704. Binary Search";

type Solution = typeof search;

const cases = [
  {
    input: [[-1, 0, 3, 5, 9, 12], 9],
    output: 4,
  },
  {
    input: [[-1, 0, 3, 5, 9, 12], 2],
    output: -1,
  },
] satisfies TestCase<Solution>[];

describe("704. Binary Search", () => {
  cases.forEach(({ input, output }) => {
    it(`returns ${output} for nums ${JSON.stringify(input[0])} and target ${input[1]}`, () => {
      expect(search(...input)).toBe(output);
    });
  });
});
