import { describe, expect, it } from "vitest";
import type { TestCase } from "../types";
import { canFinish } from "~/medium/207. Course Schedule";

type Solution = typeof canFinish;

const cases = [
  {
    input: [2, [[1, 0]]],
    output: true,
  },
  {
    input: [
      2,
      [
        [1, 0],
        [0, 1],
      ],
    ],
    output: false,
  },
] satisfies TestCase<Solution>[];

describe("207. Course Schedule", () => {
  cases.forEach(({ input, output }) => {
    it(`returns ${output} for numCourses ${input[0]} and prerequisites ${JSON.stringify(input[1])}`, () => {
      expect(canFinish(...input)).toBe(output);
    });
  });
});
