import { describe, expect, it } from "vitest";
import type { TestCase } from "../types";
import { romanToInt } from "../../easy/13. Roman to Integer";

type Solution = typeof romanToInt;

const cases = [
  {
    input: ["III"],
    output: 3,
  },
  {
    input: ["LVIII"],
    output: 58,
  },
  {
    input: ["MCMXCIV"],
    output: 1994,
  },
] satisfies TestCase<Solution>[];

describe("13. Roman to Integer", () => {
  cases.forEach(({ input, output }) => {
    it(`returns ${output} for s ${input[0]}`, () => {
      expect(romanToInt(...input)).toBe(output);
    });
  });
});
