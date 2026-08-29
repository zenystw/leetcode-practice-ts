import { describe, expect, it } from "vitest";
import type { TestCase } from "../types";
import { containsDuplicate } from "../../easy/217. Contains Duplicate";

type Solution = typeof containsDuplicate;

const cases = [
  {
    input: [[1, 2, 3, 1]],
    output: true,
  },
  {
    input: [[1, 2, 3, 4]],
    output: false,
  },
  {
    input: [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]],
    output: true,
  },
] satisfies TestCase<Solution>[];

describe("217. Contains Duplicate", () => {
  cases.forEach(({ input, output }) => {
    it(`returns ${output} for nums ${JSON.stringify(input[0])}`, () => {
      expect(containsDuplicate(...input)).toBe(output);
    });
  });
});
