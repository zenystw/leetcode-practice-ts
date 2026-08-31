import { describe, expect, it } from "vitest";
import type { TestCase } from "../types";
import { isValid } from "~/easy/20. Valid Parentheses";

type Solution = typeof isValid;

const cases = [
  {
    input: ["()"],
    output: true,
  },
  {
    input: ["()[]{}"],
    output: true,
  },
  {
    input: ["(]"],
    output: false,
  },
  {
    input: ["([])"],
    output: true,
  },
  {
    input: ["([)]"],
    output: false,
  },
] satisfies TestCase<Solution>[];

describe("20. Valid Parentheses", () => {
  cases.forEach(({ input, output }) => {
    it(`returns ${output} for s "${input[0]}"`, () => {
      expect(isValid(...input)).toBe(output);
    });
  });
});
