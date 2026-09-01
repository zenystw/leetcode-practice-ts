import { describe, expect, it } from "vitest";
import type { TestCase } from "../types";
import { groupCasesByInput } from "../helpers/multiple-outputs";
import { findOrder } from "~/medium/210. Course Schedule II";

type Solution = typeof findOrder;

const cases = [
  {
    input: [2, [[1, 0]]],
    output: [0, 1],
  },
  {
    input: [
      4,
      [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
      ],
    ],
    output: [0, 1, 2, 3],
  },
  {
    input: [
      4,
      [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
      ],
    ],
    output: [0, 2, 1, 3],
  },
  {
    input: [1, []],
    output: [0],
  },
] satisfies TestCase<Solution>[];

describe("210. Course Schedule II", () => {
  groupCasesByInput(cases).forEach(({ input, outputs }) => {
    it(`returns a valid order for numCourses ${input[0]} and prerequisites ${JSON.stringify(input[1])}`, () => {
      expect(outputs).toContainEqual(findOrder(...input));
    });
  });
});
